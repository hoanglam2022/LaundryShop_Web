import React, {Component} from "react"
import {Route, Switch} from "react-router-dom"
import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'

import {HomePage} from '../features/Home'
import {Login, Register} from '../features/Auth'
import {ErrorPage} from "../features/Exceptions";

import {
    Index as ProductIndex,
    Detail as ProductDetail,
} from '../features/Product'

class AllRoutes extends Component {
    render() {
        return (
            <Switch>
                <PublicRoute path="/login" layout='Auth'><Login/></PublicRoute>
                <PublicRoute path="/register" layout='Auth'><Register/></PublicRoute>

                <PrivateRoute path="/" exact={true}><HomePage/></PrivateRoute>
                <PrivateRoute path="/products" exact={true}><ProductIndex/></PrivateRoute>
                <PrivateRoute path="/products/create" ><ProductDetail/></PrivateRoute>
                <PrivateRoute path="/products/detail/:id" exact={true}><ProductDetail/></PrivateRoute>

                <PublicRoute path="*"><ErrorPage code={404}/></PublicRoute>

                {/* <Route path='/' element={<PrivateRoute><HomePage/></PrivateRoute>}/>

                <Route path='products' element={<PrivateRoute><ProductIndex/></PrivateRoute>}/>
                <Route index path="products/create" element={<PrivateRoute><ProductDetail/></PrivateRoute>}/>
                <Route index path="products/detail/:id" element={<PrivateRoute><ProductDetail/></PrivateRoute>}/>

                <Route index path="*" element={<PublicRoute><ErrorPage code={404}/></PublicRoute>}/>*/}
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


            </Switch>
        );
    }

}

export default AllRoutes
