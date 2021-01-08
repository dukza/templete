import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";


// const SLink = styled(Link)`
//     color: ${props => props.current ? "#276ef1" : "#000"}
//     color: ${props => props.current === '/' ? "#ffffff" : "#000"}
// `

export default () => {
    return(
        <div id="header">
            <div id="nav">
                <a className="logo letter-spacing--3" href="/">iWill</a>
                <a className="menu"><i className="fal fa-bars"></i></a>
            </div>
            <div id="nav-web">
                <Link to="/about">ABOUT</Link>
                <Link to="/works">WORKS</Link>
                <Link to="/contact">CONTACT</Link>
                <span className="text">(Made with React)</span>
            </div>    
        </div>        
    )
}
