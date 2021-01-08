import React from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


const SLink = styled(Link)`
    color: ${props => props.current ? "#276ef1" : "#000"}
    color: ${props => props.current === '/' ? "#ffffff" : "#000"}
`

export default withRouter(({location:{pathname}}) => {
    return(
        <div id="header">
            <div id="nav">
                <a className="logo letter-spacing--3" href="/">iWill</a>
                <a className="menu"><i className="fal fa-bars"></i></a>
            </div>
            <div id="nav-web">
                <SLink to="/about" current={pathname==='/about'}>ABOUT</SLink>
                <SLink to="/guide/logo" current={pathname===`/guide/logo`}>WORKS</SLink>
                <SLink to="/showcase" current={pathname==='/showcase'}>CONTACT</SLink>
                <SLink to="/showcase" current={pathname==='/showcase'}>(Made with React)</SLink>
            </div>    
        </div>        
    )
}

)