import React from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


const SLink = styled(Link)`
    color: ${props => props.current ? "#276ef1" : "#000"}
`

export default withRouter(({location:{pathname}}) => (
    <div className="container-md mx-auto" id="header">
        <div id="nav">
            <a className="logo" href="/">dukyeon's portfolio</a>
            <a className="menu"><i className="fal fa-bars"></i></a>
        </div>
        <div className="container-md" id="nav-web">
            <SLink to="/" current={pathname==='/'}>About</SLink>
            <SLink to="/guide/logo" current={pathname===`/guide/logo`}>Works</SLink>
            <SLink to="/showcase" current={pathname==='/showcase'}>Contact</SLink>
        </div>    
    </div>        
))