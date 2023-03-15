import React from "react";
import { useState } from "react";


function CardFlip(props) {
const [flip, setFlip] = useState(0)

return(
    <div
     className={`Card ${flip ? 'Flip': '' }`}
     onClick={()=>setFlip(!flip)}>
    <div className="Front">
        {flip ? props.backCard : props.frontCard}
    </div>
    <div className="Back">
        {flip ? props.backCard : props.frontCard}
    </div> 
    </div>

)
}

export default CardFlip