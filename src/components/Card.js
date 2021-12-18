
const Card = (props) => {   
    
    // console.log('props ');
    

    const content = 
    <>        
                <div 

                    className={props.className}
                    // className={props.className}
                    style={{background: props.bg}}
                    id={props.id}
                    // onClick={() => props.setselectedCard(props.id) }
                    onMouseOver={() => {props.setSelectedCard(props.id)}}
                    onMouseOut={() => {props.setSelectedCard(null)}}
                    >


                        <h2>{props.title}</h2>  

                </div> 
          
      
    </>
       
    return (
    <>  
            {content}
    </>    
    );

}


export default Card;