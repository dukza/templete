import React from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


const SLink = styled(Link)`
    color: ${props => props.current ? "#276ef1" : "#000"};
    display:block;
`

export default withRouter(({location:{pathname}}) => (
    <div id="sider">
        <SLink to="/guide/logo" current={pathname==='/guide/logo'}>logo</SLink>
        <SLink to="/guide/color" current={pathname==='/guide/color'}>color</SLink>
        <SLink to="/guide/brandArchitecture" current={pathname==='/guide/brandArchitecture'}>Brand Architecture</SLink>
        <SLink to="/guide/composition" current={pathname==='/guide/composition'}>Composition</SLink>
    </div>
))