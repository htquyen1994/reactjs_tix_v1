import React from 'react'

export function SliderArrowPrev(props) {
    const { className, style, onClick } = props;
    return (
      <div
        
        style={{ ...style, 
                display: "block",
                position: "absolute", 
                height: "100px",
                width: "50px" ,
                top: "50%",
                zIndex: "99",
                background: "url('./images/back-session.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                transform: "translateY(-50%)" ,
                cursor: "pointer",
                left: "40px"}}
        onClick={onClick}
      />
    );
}


export function SliderArrowNext(props) {
    const { className, style, onClick } = props;
    return (
      <div

        style={{ ...style, 
                display: "block",
                background: "red",
                position: "absolute", 
                height: "100px",
                width: "50px" ,
                top: "50%",
                zIndex: "99",
                background: "url('./images/next-session.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
                transform: "translateY(-50%)" ,
                right: "40px"}
            }
        onClick={onClick}
      />
    );
}