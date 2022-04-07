import React, { useEffect, useState } from "react";

export const MyTrails = () => {
    const [userTrails, setMyTrails] = useState([])
    
    const getState = () => {
        fetch(`http://localhost:8088/userTrails?userId=${localStorage.getItem("user")}`)
                .then(res => res.json())
                .then((data) => {
                    setMyTrails(data)
                })
        }

        


    useEffect(() => {
        getState()
    },
    []
    )

    const deleteTrails = (id) => {
        fetch(`http://localhost:8088/userTrails/${id}`,{
            method: "DELETE"
        })
            .then((data) => {
                getState(data)
            })
    }

        
    

    return (
        
        <>
        <h2>My Trails</h2>
        {
            userTrails.map(
                (myTrailsObject) => {
                    return <><p key={`myTrail--${myTrailsObject.id}`}>{myTrailsObject.trailName}</p>
                    <button key={myTrailsObject.id} onClick={() => { deleteTrails(myTrailsObject.id); } }> Delete </button></>
                }
                )
            }
        </>
    )
}