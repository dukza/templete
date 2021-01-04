import React from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";

const SlinkWraper = styled.div`
    position: absolute;
    top: 6.6rem;
    bottom: 0;
    height: auto;   
    width: auto; 
    trasition:transform 0.25s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    z-index: 15;
`

const SlinkWrap = styled.div`

    @media (min-width: 1200px) {
        padding-top: 3.1rem;
        margin-left: -2.4rem;
        padding-bottom: 3.1rem;
        margin-top: -6.1rem;
        transition: transform 0.25s cubic-bezier(0.19, 1, 0.22, 1) 0s;
        position: sticky; 
        top:0px;
        transform: translateY(11rem);
    }
`

const SlinkG = styled.div`
@media (min-width: 1200px) {
    padding-left: 3.1rem;
    padding-bottom: 4rem;
    
}

`


const SLink = styled(Link)`
    color: ${props => props.current ? "#276ef1" : "#000"};
    display:block;
    text-decoration:none;
    line-height:1.75;
`

const Dot = styled.span`
    display:inline-block;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 1.6rem;
    width: 0.6rem;
    height: 0.6rem;
    background-color: red;
    margin-left: -1rem;
`

export default withRouter(({location:{pathname}}) => (
    <SlinkWraper className="container-left">
        <SlinkWrap>
            <SlinkG>
                <SLink to="/guide/logo" current={pathname==='/guide/logo'}><Dot></Dot>logo</SLink>
                <SLink to="/guide/color" current={pathname==='/guide/color'}>color</SLink>
                <SLink to="/guide/brandArchitecture" current={pathname==='/guide/brandArchitecture'}>Brand Architecture</SLink>
                <SLink to="/guide/composition" current={pathname==='/guide/composition'}>Composition</SLink>    
            </SlinkG>
        </SlinkWrap>
    </SlinkWraper>
))