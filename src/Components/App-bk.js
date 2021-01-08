import React from 'react';
import {Link} from "react-router-dom";
import Router from './Router';
import Footer from './Footer';


import './../css/all.css';
import './../css/normalize.css';
import './../css/styles.css';
import styled from "styled-components";

const SWrap = styled.div`
    .logo{
      color: ${props => props.current === '/' ? "#ffffff" : "#000"}
    }
    #footer span{
        color: ${props => props.current === '/' ? "#ffffff" : "#000"}
    }
`

function App() {
  return (
    <>
      <SWrap>
        <Router/>
        <Footer/>
      </SWrap>

    </>
  );
}

export default App;
