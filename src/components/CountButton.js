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

    return(
        <div>
            <button onClick={handleClick}>+{props.incrementBy}</button>
            <div>{currentCount}</div>
        </div>
    );
};

export default CountButton;