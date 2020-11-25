import React from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";

const SlinkWraper = styled.div`
    position: absolute;
    top:0px;
    bottom: 0;
    height: auto;   
    width: auto; 
    trasition:transform 0.25s cubic-bezier(0.19, 1, 0.22, 1) 0s;
`

const SlinkWrap = styled.div`
    position: sticky; 
    top:0px;
    transform: translateY(11rem);
`


const SLink = styled(Link)`
    color: ${props => props.current ? "#276ef1" : "#000"};
    display:block;
    text-decoration:none;
    line-height:1.75;
`

export default withRouter(({location:{pathname}}) => (
    <SlinkWraper>
        <SlinkWrap>
            <SLink to="/guide/logo" current={pathname==='/guide/logo'}>logo</SLink>
            <SLink to="/guide/color" current={pathname==='/guide/color'}>color</SLink>
            <SLink to="/guide/brandArchitecture" current={pathname==='/guide/brandArchitecture'}>Brand Architecture</SLink>
            <SLink to="/guide/composition" current={pathname==='/guide/composition'}>Composition</SLink>    
        </SlinkWrap>
    </SlinkWraper>
))