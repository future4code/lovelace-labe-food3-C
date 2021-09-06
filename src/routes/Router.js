import React from "react"
import {Switch, Route, BrowserRouter} from "react-router-dom"
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import InitialPage from "../pages/InitialPage/InitialPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/signup">
                    <SignUpPage/>
                </Route>

                <Route exact path="/">
                    <InitialPage/>
                </Route>

                <Route exact path="/post/:id">

                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router