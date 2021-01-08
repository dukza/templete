import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LayoutDefault = ({childern}) => {
    return(
        <>
            <Header/>
                <div>{childern}</div>
            <Footer/>
        </>
    )

}

export default LayoutDefault;