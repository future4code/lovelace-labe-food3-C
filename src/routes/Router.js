import React from "react"
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
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/signup">
                    <Header/>
                    <SignUpPage/>
                </Route>

                <Route exact path="/">
                    <InitialPage/>
                </Route>

                <Route exact path="/home">
                    <Header/>
                    <HomePage />
                </Route>

                <Route exact path="/restaurant/:id">
                    <Header/>
                    <RestaurantPage />
                </Route>

                <Route exact path="/cart">
                    <Header/>
                    <CartPage />
                </Route>

                <Route exact path="/profile">
                    <Header/>
                    <ProfilePage />
                </Route>

                <Route exact path="/profile/edit/address">
                    <Header/>
                    <AddressPage />
                </Route>

                <Route exact path="/profile/edit/user">
                    <Header/>
                    <UserInfoPage />
                </Route>

                <Route>
                    <Header/>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router