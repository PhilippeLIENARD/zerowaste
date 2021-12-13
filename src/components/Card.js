const Card = (props) => {   
    
    // console.log('props ');
    // console.log(props.clickState);
    
    // const[cliked , setCliked]= useState(false);

    const content = 
             <div             
            className="card"
            style={{background: props.bg}}
            id={props.id}           
            // onClick={() => setCliked(!cliked) }
            onClick={() => props.setClikState(props.id) }
           
        >
              {/* {String(cliked)} */}
                        
                <div>
                    

                    {/* <h1> {String(props.clickState)} </h1> */}
                                
                     {/* <h2>{props.title}</h2> */}

                    {
                    
                    console.log("clickState value -> " + props.clickState + " this ID value ->  " + props.id )
                    
                    
                    
                    }

                    {(props.clickState === props.id) ? '**** SELECTED !' : 'NOT SELECTED'}

                    {/* <p>{(cliked === true) ? props.description : null}</p> */}

                </div>

        </div> 
      
     
       
    return (
        <>
            {content}
        </>
    );

}


export default Card;