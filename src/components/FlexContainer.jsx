import React from 'react'

function FlexContainer(props) {

    const styleFlex = {
        display: "flex",
        flexDirection: "row",
        gap:"15px",
        width: "100%",
        justifyContent:"center"
    };

    return (
        <div style={styleFlex}>
            {props.children}
        </div>    
    )
}

export default FlexContainer