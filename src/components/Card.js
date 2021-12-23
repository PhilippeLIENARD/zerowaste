const Card = (props) => {   
    
    // console.log('props ');

    // console.log("component -> overStatus -> " + props.overStatus);
    
    let thisOverStatus = parseInt(props.mouseOverStatus);

    let isOver = () => (thisOverStatus === props.id) ? true : false ; 

   
    

    const background = {
        background: props.bg   
    }

    let bluredlines ;

    // isOver() ? bluredlines = {filter: 'blur(4px)'} : bluredlines = null ;

    // let opacityStyle = {
    //     opacity: "1"
    // }

    // isOver() ? bluredlines = opacityStyle : bluredlines = null ;
        
        
    const content = 
    <>        
                <div 

                    className={isOver() ? props.className_2 : props.className}                    
                    style={{...background}}
                    id={props.id}
                    
                    // onTouchStart={() => props.setMouseOverStatus([props.id , 'overCard'])}
                    // onTouchEnd={() => {props.setSelectedCard(props.id) ; window.scrollTo(0,0)}}
                    
                    onMouseOver={() => props.setMouseOverStatus([props.id , 'overCard'])}
                    onMouseLeave={() => props.setMouseOverStatus([null , 'notOver'])}

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