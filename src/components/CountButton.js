import React, {useState} from "react";

const CountButton = (props)=>{
    const [currentCount, setCurrentCount] = useState(0);
     
    const handleClick = () =>{
        const next = currentCount+props.incrementBy;
        if (next > 10){
            setCurrentCount(0);
        }
        else {

            setCurrentCount(next);
        }
        
    };
    const buttonStyle = {
        background: props.buttonColor,
        borderRadius: "10px"
    };
    return(
        <div>
            <button onClick={handleClick} style={buttonStyle}>+{props.incrementBy}</button>
            <div>{currentCount}</div>
        </div>
    );
};

export default CountButton;