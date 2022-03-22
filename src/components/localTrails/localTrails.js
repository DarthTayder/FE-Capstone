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
            console.log(trailRecord)
            setUserTrails(trailRecord)
            var named = userTrails.name; 
            console.log('named: ', trailRecord.name);
            console.log('userTrails: ', userTrails);
            console.log('userTrails.id: ', userTrails.id);
            var id = trailRecord.id;
            var name = trailRecord.name;
        
        const userTrail = {
            id: id,
            trailName: name,
            test: 2,
            userId: 1,
            localtrailId: 1
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
            
    return (
        
        <>
        <h2>Local Trails</h2>
        {
            trails.map(
                (localTrailsObject) => {
                    return <p key={localTrailsObject.id}>{localTrailsObject.name}
                    <GrFavorite key={localTrailsObject.id} onClick={() => handleViewBtnClick(localTrailsObject)} /> </p>
                    
                }
                )
            }
            
        </>
        
        
    )
}
