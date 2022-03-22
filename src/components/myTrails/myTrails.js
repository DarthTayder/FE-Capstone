import React, { useEffect, useState } from "react";

export const MyTrails = () => {
    const [myTrails, setMyTrails] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/userTrails")
                .then(res => res.json())
                .then((data) => {
                    setMyTrails(data)
                })
        },
        []
    )

        
    

    return (
        
        <>
        <h2>My Trails</h2>
        {
            myTrails.map(
                (myTrailsObject) => {
                    return <p key={`myTrail--${myTrailsObject.id}`}>{myTrailsObject.trailName}</p> 
                }
                )
            }
        </>
    )
}