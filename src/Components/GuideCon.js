import React from 'react';
import Sider from './Sider';

const GuideCon = ({children}) => {
    return(
        <div className="container mx-auto">
            <Sider></Sider>
            <div>{children}</div>            
        </div>
    )
}

export default GuideCon;