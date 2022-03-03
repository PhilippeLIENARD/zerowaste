const Card = (props) => {   
    
    let thisOverStatus = parseInt(props.mouseOverStatus);

    let isOver = () => (thisOverStatus === props.id) ? true : false ; 

    // do a Bool if window width > or < mobile size returns true or false
    // add this bool in the isInTheMiddle Bool condition

    // let isMobileWidth = () => {

       let isMobile;
        
       let watchMediaSize = (mediaQuery) => (mediaQuery.matches) ? isMobile = true : isMobile = false;

       const mobileWidth = window.matchMedia("(max-width : 768px)");

       watchMediaSize(mobileWidth);

       mobileWidth.addEventListener("change" , watchMediaSize);       

    // }
    

    let isInTheMiddle = () => (props.id === props.thisIsInTheMiddle && isMobile) ? true : false ;

    // console.log("@@@ isInTheMiddle -> " + props.id + " ? " + props.thisIsInTheMiddle + " - " + isInTheMiddle());
    
    // isInTheMiddle() ? console.log("Bool say true") : console.log("Bool say false") ;

    const background = {
        background: props.bg   
    }             
        
    const content = 
    <>        
                <div 

                    className={props.className}                    
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

                        
                            <p className="readMore">read more</p>
                       

                </div> 
          
      
    </>
       
    return (
    <>  
            {content}
    </>    
    );

}


export default Card;