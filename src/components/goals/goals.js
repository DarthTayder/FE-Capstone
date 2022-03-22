import React, { useEffect, useState } from "react";

export const GoalsList = () => {
    const [goals, setGoals] = useState([])
    const fetchGoals = async () => {
        const apiCall = await fetch("http://localhost:8088/goals"); 
        const data = await apiCall.json();
        setGoals(data)

    }
    useEffect(
        () => {
            fetchGoals();
            },
            [goals])
        
    

    return (
        
        <>
        <h2>My Goals</h2>
        {
            goals.map(
                (goalsObject) => {
                    return <p key={`goal--${goalsObject.id}`}>{goalsObject.goalName}</p> 
                }
            )
        }
        <button>Add Goal</button>
        <button>Delete Goal</button>
        </>
        
        
    )
}