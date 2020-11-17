import React from 'react';
import {BrowserRouter as Router, Route , Redirect, Switch} from "react-router-dom";

import './../css/styles.css'

import Header from './Header';
import brandStory from '../Routes/brand-story';
import downloads from '../Routes/downloads';
import faq from '../Routes/faq';
import guide from '../Routes/guide';
import logoOverview from '../Routes/logo-overview';
import showcase from '../Routes/showcase';


export default () =>(
    <Router>
        <>
            <Header/>
            <Switch>
                <div className="container mx-auto">
                    <Route path="/" exact component={brandStory}/>
                    <Route path="/brandStory" exact component={brandStory}/>
                    <Route path="/guide" component={guide}/>
                    <Route path="/showcase" component={showcase}/>
                    <Route path="/downloads" component={downloads}/>
                    <Route path="/faq" component={faq}/>
                    <Redirect from="*" to="/" />                    
                </div>
            </Switch>
        </>
    </Router>
)