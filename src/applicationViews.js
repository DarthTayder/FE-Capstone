import React from "react";
import { Route } from "react-router-dom"
import { GoalsList } from "./components/goals/goals";
import { LocalTrailList } from "./components/localTrails/localTrails";
import { MyTrails } from "./components/myTrails/myTrails";
import { CreateTrail } from "./components/createTrail/createTrail";
import { Login } from "./components/auth/Login";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/localTrails">
                <LocalTrailList />
            </Route>
            <Route path="/goals">
                <GoalsList />
            </Route>
            <Route path="/myTrails">
                <MyTrails />
            </Route>
            <Route path="/createTrail">
                <CreateTrail />
            </Route>
        </>
    )
    }