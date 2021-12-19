
const Card = (props) => {   
    
    // console.log('props ');
    
    let thisOverStatus = parseInt(props.mouseOverStatus);

    console.log("thisOverStatus -> " + thisOverStatus)

    const content = 
    <>        
                <div 

                    className={props.className}
                    // className={props.className}
                    style={{background: props.bg}}
                    id={props.id}
                    
                    // onDoubleClick={() => props.setSelectedCard(props.id)}
                    onClick={() => props.setSelectedCard(props.id)}
                    // onClick={() => props.setSelectedCard(props.id) }
                    // onClick={() => props.setMouseOverStatus(props.id)}
                    onMouseOver={() => props.setMouseOverStatus(props.id)}
                    onMouseLeave={() => props.setMouseOverStatus(null)}
                    >


                        <h2>{props.title}</h2> 

                        <p>{props.description}</p>

                        {(thisOverStatus === props.id) &&
                            <p className="readMore">read more</p>
                        } 

                </div> 
          
      
    </>
       
    return (
    <>  
            {content}
    </>    
    );

}


export default Card;