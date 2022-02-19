import React, {Component} from "react"
import {Route, Routes} from "react-router-dom"
import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'
import {Login, Register} from '../features/Auth'
import {ErrorPage} from "../features/Exceptions";

import {
    Index as ProductIndex,
    Detail as ProductDetail,
} from '../features/Product'

class AllRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route>
                    <Route path='login' element={<PublicRoute layout='Auth'><Login/></PublicRoute>}/>

                    <Route path='products' element={<PrivateRoute><ProductIndex/></PrivateRoute>}/>
                    <Route index path="products/:id" element={<PrivateRoute><ProductDetail/></PrivateRoute>}/>

                    <Route index path="*" element={<PublicRoute><ErrorPage code={404}/></PublicRoute>}/>
                </Route>
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
                </PublicRoute>*/}


            </Routes>
        );
    }

}

export default AllRoutes
