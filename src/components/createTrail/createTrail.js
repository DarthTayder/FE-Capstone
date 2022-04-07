import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export const CreateTrail = () => {
    const [trailName, setTrailName] = useState('')
    const [trailLocation, setTrailLocation] = useState('')
    const [name, setName] = useState('')
    
    

    const history = useHistory()

    const handleNameChange = event => {

        setTrailName(event.target.value)
    
      };
    
    
    
    
    
    const handleLocationChange = event => {
    
        setTrailLocation(event.target.value)
    
      };

    
      const handleSomethingChange = (event) => {
          console.log(event)
          console.log('test')
        const value = event.target.value;
        setName(value);
        };

    const submitTrail = (evt) => {
        evt.preventDefault()

        const NewTrail = {
            name: trailName,
            address: trailLocation,
            trailCategoryName: name,
            userId: parseInt(localStorage.getItem("user")),
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(NewTrail)
        }
        return fetch("http://localhost:8088/localTrails?_expand=trailCategories?_expand=terrain", fetchOption)
        .then(response => response.json())
        .then(() => {
            history.push("/localTrails")
        })
    }
    return (
    
        
        
        <form className="trailForm">
            <h2 className="trailForm__title">Create New Trail</h2>
            <fieldset>
                <div className="form-group">
                    <label>Trail Name:</label>
                    <input
                        onChange={handleNameChange}

                        value={trailName}
                      
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Trail Name" />
                </div>
                <div className="form-group">
                    <label>Trail Location:</label>
                    <input
                        onChange={handleLocationChange}

                        value={trailLocation}

                        required 
                        type="text"
                        className="form-control"
                        placeholder="Location" />
                </div>
                <div>
                    <select onChange={handleSomethingChange}value={name}>
                        <option defaultValue="Enjoyment">Enjoyment</option> 
                        <option value="Workout">Workout</option>
                        
                    </select>
                </div>
            


            </fieldset>
            <button onClick={submitTrail} className="btn btn-primary">
                Submit Trail
            </button>
        </form>
            
            )

        
       }