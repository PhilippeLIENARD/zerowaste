import React, { useState } from 'react';


const Card = (props) => {    
    
  const[cliked , setCliked]= useState(false);

    const content = 
             <div             
            className="card"
            style={{background: props.bg}}
            id={props.id}
            onClick={() => setCliked(!cliked) }
        >
              {String(cliked)}
                        
                <div>

                    {/* <h2> CARD </h2> */}
                                
                     <h2>{props.title}</h2>

                    <p>{(cliked === true) ? props.description : null}</p>

                </div>

        </div> 
      
     
       
    return (
        <>
            {content}
        </>
    );

}


export default Card;