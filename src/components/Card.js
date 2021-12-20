
const Card = (props) => {   
    
    // console.log('props ');
    
    let thisOverStatus = parseInt(props.mouseOverStatus);

    let isOver = () => (thisOverStatus === props.id) ? true : false ; 

    const content = 
    <>        
                <div 

                    className={isOver() ? props.className_2 : props.className}                    
                    style={{background: props.bg}}
                    id={props.id}
                    
                    onTouchStart={() => props.setMouseOverStatus(props.id)}
                    // onTouchEnd={() => {props.setSelectedCard(props.id) ; window.scrollTo(0,0)}}
                    
                    onMouseOver={() => props.setMouseOverStatus(props.id)}
                    onMouseLeave={() => props.setMouseOverStatus(null)}

                    onClick={() => {props.setSelectedCard(props.id) ; window.scrollTo(0,0)}}


                >


                        <h2>{props.title}</h2> 

                        <p>{props.description}</p>

                        { isOver() &&
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