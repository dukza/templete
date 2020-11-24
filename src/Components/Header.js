import React from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


const SLink = styled(Link)`
    color: ${props => props.current ? "#276ef1" : "#000"}
`

export default withRouter(({location:{pathname}}) => (
    <div id="header">
        <div className="container mx-auto" >
            <div id="nav">
                <a className="logo" href="/">Name</a>
                <a className="menu"><i class="fal fa-bars"></i></a>
            </div>
            <div id="nav-web">
                <SLink to="/" current={pathname==='/'}>Brand story</SLink>
                <SLink to="/guide/logo" current={pathname===`/guide/logo`}>System elements</SLink>
                <SLink to="/showcase" current={pathname==='/showcase'}>Showcase</SLink>
                <SLink to="/downloads" current={pathname==='/downloads'}>Downloads</SLink>
                <SLink to="/faq" current={pathname==='/faq'}>Help / FAQ</SLink>

            </div>    
        </div>        
    </div>
))