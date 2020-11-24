import React from 'react';
import {BrowserRouter as Router, Route , Redirect, Switch} from "react-router-dom";

import './../css/styles.css'

import Header from './Header';
import BrandStory from '../Routes/BrandStory';
import Downloads from '../Routes/Downloads';
import Faq from '../Routes/Faq';
import Guide from '../Routes/Guide';
import Logo from '../Routes/Guide/Logo';
import Showcase from '../Routes/Showcase';
import BrandArchitecture from '../Routes/Guide/BrandArchitecture';
import Color from '../Routes/Guide/Color';
import Composition from '../Routes/Guide/Composition';


export default () =>(
    <Router>
        <>
            <Header/>
            <Switch>
                    <Route path="/" exact component={BrandStory}/>
                    <Route path="/brandStory" exact component={BrandStory}/>
                    <Route path="/guide/logo" exact component={Logo}/>
                    <Route path="/guide/brandArchitecture" component={BrandArchitecture}/>
                    <Route path="/guide/color" component={Color}/>
                    <Route path="/guide/composition" component={Composition}/>
                    <Route path="/showcase" component={Showcase}/>
                    <Route path="/downloads" component={Downloads}/>
                    <Route path="/faq" component={Faq}/>
                    <Redirect from="*" to="/" />          
            </Switch>
        </>
    </Router>
)