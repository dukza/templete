import React from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


const SLink = styled(Link)`
    color: ${props => props.current ? "#276ef1" : "#000"}
`

export default withRouter(({location:{pathname}}) => (
    <div id="header">
        <div id="nav">
            <a className="logo letter-spacing--3" href="/">Will</a>
            <a className="menu"><i className="fal fa-bars"></i></a>
        </div>
        <div id="nav-web">
            <SLink to="/" current={pathname==='/'}>ABOUT</SLink>
            <SLink to="/guide/logo" current={pathname===`/guide/logo`}>WORKS</SLink>
            <SLink to="/showcase" current={pathname==='/showcase'}>CONTACT</SLink>
            <SLink to="/showcase" current={pathname==='/showcase'}>KR</SLink>
        </div>    
    </div>        
))