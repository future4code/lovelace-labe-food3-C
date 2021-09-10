import React, { useState } from "react"
import {Switch, Route, BrowserRouter} from "react-router-dom"
import AddressPage from "../pages/AddressPage/AddressPage";
import CartPage from "../pages/CartPage/CartPage";
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage.js/RestaurantPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import UserInfoPage from "../pages/UserInfoPage/UserInfoPage";
import InitialPage from "../pages/InitialPage/InitialPage";
import Header from "../components/Header/Header";


const Router = () => {
    const [pageTitle, setPageTitle] = useState('')
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/signup">
                    <Header pageTitle={pageTitle} setPageTitle={setPageTitle}/>
                    <SignUpPage setPageTitle={setPageTitle}/>
                </Route>
                <Route exact path="/">
                    <InitialPage/>
                </Route>
                <Route exact path="/home">
                    <Header pageTitle={pageTitle} setPageTitle={setPageTitle}/>
                    <HomePage setPageTitle={setPageTitle}/>
                </Route>
                <Route exact path="/restaurant/:id">
                    <Header pageTitle={pageTitle} setPageTitle={setPageTitle}/>
                    <RestaurantPage setPageTitle={setPageTitle}/>
                </Route>
                <Route exact path="/cart">
                    <Header pageTitle={pageTitle} setPageTitle={setPageTitle}/>
                    <CartPage setPageTitle={setPageTitle}/>
                </Route>
                <Route exact path="/profile">
                    <Header pageTitle={pageTitle} setPageTitle={setPageTitle}/>
                    <ProfilePage setPageTitle={setPageTitle}/>
                </Route>
                <Route exact path="/profile/edit/address">
                    <Header pageTitle={pageTitle} setPageTitle={setPageTitle}/>
                    <AddressPage setPageTitle={setPageTitle}/>
                </Route>
                <Route exact path="/profile/edit/user">
                    <Header pageTitle={pageTitle} setPageTitle={setPageTitle}/>
                    <UserInfoPage setPageTitle={setPageTitle}/>
                </Route>
                <Route>
                    <Header pageTitle={pageTitle} setPageTitle={setPageTitle}/>
                    <ErrorPage setPageTitle={setPageTitle}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router