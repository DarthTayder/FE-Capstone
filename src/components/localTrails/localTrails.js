import React, { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";

import { useHistory } from "react-router-dom";


export const LocalTrailList = () => {
    const [trails, setTrails] = useState([])
    const [userTrails, setUserTrails] = useState([])

    const fetchTrails = async () => {
        const apiCall = await fetch("http://localhost:8088/localTrails"); 
        const data = await apiCall.json();
        setTrails(data)

    }
    const history = useHistory()

    useEffect(
        async () => {
        await fetchTrails();
            },
            []
            
            )

        const handleViewBtnClick = (trailRecord) => {
            
            setUserTrails(trailRecord)
            const named = userTrails.name; 
            console.log('named: ', trailRecord.name);
            console.log('userTrails: ', userTrails);
            console.log('userTrails.id: ', userTrails.id);
            const id = trailRecord.id;
            const name = trailRecord.name;
        
        const userTrail = {
            userId: localStorage.getItem("user"),
            trailName: name,
            localTrailId: 1
        }
        console.log(userTrail);
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userTrail)
        }
        console.log(JSON.stringify(userTrail))
        return fetch("http://localhost:8088/userTrails", fetchOption)
        .then(response => response.json())
        .then(() => {history.push("/myTrails")}
        )
    }

    const deleteTrails = (id) => {
        fetch(`http://localhost:8088/localTrails/${id}`, {
            method: "DELETE"
        })
            /*.then((data) => {
                setTrails(data);
                fetchTrails();
                console.log("something");

            }
            )*/
            fetchTrails();
            
    }
            
    return (
        
        <div>
        <h2>Local Trails</h2>
        {
            trails.map(
                (localTrailsObject) => {
                    return <><p key={localTrailsObject.id}>{localTrailsObject.name}
                        <GrFavorite key={localTrailsObject.id} onClick={() => handleViewBtnClick(localTrailsObject)} /> </p>
                        <button key={`trail--${localTrailsObject.id}`}  onClick={() => { deleteTrails(localTrailsObject.id); } }>Delete</button></>
                    
                }
                )
            }
            
        
        </div>
        
    )
}
