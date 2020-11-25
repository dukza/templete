import React from 'react';
import Sider from './Sider';
import styled from "styled-components";




const ConWrap = styled.div`
    display:grid;
    grid-column-gap: 4.8rem;
    grid-template-columns: repeat(16, 1fr);
`

const Con = styled.div`
    grid-column: 5 / span 12;
    height:14000px;
`




const GuideCon = ({children}) => {
    return(
        <div className="container mx-auto">
            <Sider></Sider>
            <ConWrap>
               <Con>{children}</Con>   
            </ConWrap>       
        </div>
    )
}

export default GuideCon;