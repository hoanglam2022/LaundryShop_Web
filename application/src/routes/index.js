import React, {Component} from "react"
import {Routes as RoutesDom} from "react-router-dom"
/*import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'
import {HomePage, ContactPage, AboutPage} from '../features/Home'
import {UserDetail} from '../features/Users'
import {Login, Register} from '../features/Auth'
import {ErrorPage} from "../features/Exceptions";*/

class Routes extends Component {
    render() {
        const rules = [
            'admin'
        ];
        return (
            <RoutesDom>
                {/*<PublicRoute path="/login" layout='Auth'>
                    <Login/>
                </PublicRoute>
                <PublicRoute path="/register" layout='Auth'>
                    <Register/>
                </PublicRoute>

                <PublicRoute path="/errors/:code" layout='App'>
                    <ErrorPage layout='App'/>
                </PublicRoute>

                <PublicRoute path="/" layout='App' exact={true}>
                    <HomePage/>
                </PublicRoute>
                <PublicRoute path="/contact" layout='App'>
                    <ContactPage/>
                </PublicRoute>
                <PublicRoute path="/about" layout='App'>
                    <AboutPage/>
                </PublicRoute>

                <PublicRoute path="/users/:id" layout='App' exact={true}>
                    <UserDetail/>
                </PublicRoute>

                <PublicRoute path="*">
                    <ErrorPage code={404}/>
                </PublicRoute>*/}
            </RoutesDom>
        );
    }

}

export default Routes
