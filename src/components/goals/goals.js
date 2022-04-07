import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


export const GoalsList = () => {
    const [goalName, setGoalName] = useState('')
    const [goals, setGoals] = useState([])
    const history = useHistory();
    const fetchGoals = async () => {
        const apiCall = await fetch(`http://localhost:8088/goals?userId=${localStorage.getItem("user")}`);
        const data = await apiCall.json();
        setGoals(data)
        
    }

    useEffect(
        () => {
            fetchGoals();
        },
        [])

    const handleNameChange = event => {

        setGoalName(event.target.value)
    
      };

      const submitGoal = (evt) => {
        evt.preventDefault()

        const NewGoal = {
            goalName: goalName,
            userId: localStorage.getItem("user")
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(NewGoal)
        }
        return fetch("http://localhost:8088/goals", fetchOption)
        .then(response => response.json())
        .then(() => {
            fetchGoals();
        })
    }
       

    const deleteGoals = (id) => {
        fetch(`http://localhost:8088/goals/${id}`, {
            method: "DELETE"
        })
        /*.then((data) => {
            setGoals(data)

        })*/
        fetchGoals();
    }



    return (
        <>
            <h2>My Goals</h2>
            {
                goals.map((goalsObject) => {
                    return (
                        <>
                            <p key={`goal--${goalsObject.id}`}>{goalsObject.goalName}</p>
                            <button key={`goals--${goalsObject.id}`} onClick={() => { deleteGoals(goalsObject.id); }}>Delete</button>
                            
                                

                        </>


                    )
                }
                )}
                            <form className="trailForm">
                                <h2 className="trailForm__title"></h2>
                                <fieldset>
                                    <div className="form-group">
                                        <label>Goal Name:</label>
                                        <input
                                            onChange={handleNameChange}

                                            value={goalName}

                                            required autoFocus
                                            type="text"
                                            className="form-control"
                                            placeholder="Goal Name" />
                                    </div>
                                </fieldset>
                            </form>
                            <button onClick={submitGoal} className="btn btn-primary">
                Submit Goal
            </button>
    </>
                )
                
            }