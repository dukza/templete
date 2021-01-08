import React from 'react';
import {BrowserRouter as Router, Route , Redirect, Switch} from "react-router-dom";

import './../css/styles.css'

import Header from './Header';





export default () =>(
    <>
        <Header/>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/bout" exact component={About}/>
            <Route path="/works" exact component={Works}/>
            <Route path="/contact" component={Contact}/>
            <Redirect from="*" to="/" />          
        </Switch>
    </>
)