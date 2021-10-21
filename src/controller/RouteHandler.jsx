import React from 'react'
import {Route} from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Services from '../pages/Services'

function RouteHandler() {
    return(
        <>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/portfolio">
                <Portfolio/>
            </Route>
            <Route exact path="/services">
                <Services/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/contact">
                <Contact/>
            </Route>
        </>
    )
}

export default RouteHandler