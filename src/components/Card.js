import CardPop from "./CardPop";

const Card = (props) => {   
    
    // console.log('props ');
    
    let iamCliked = () => (props.clickState === props.id) ? true : false;    

    const content = 
    <>
            
                
            {/* {iamCliked() && 
            
            <CardPop
                 key={props.id}
                 id={props.id}
                 className={props.className}
                 className_2={props.className_2}
                 className_3={props.className_3} 
                 className_4={props.className_4}  
                 className_5={props.className_5}  
                 title={props.title}
                 description={props.description}
                 longtext={props.longtext}            
                 bg={props.bg}
                 link={props.link}
                 image={props.image}
                 altimage={props.altimage}
                 selectedCard={props.selectedCard}
                 setClikState={props.setselectedCard}
             />}    */}
             
           
           
                <div 

                    className={props.className}
                    // className={props.className}
                    style={{background: props.bg}}
                    id={props.id}
                    // onClick={() => props.setselectedCard(props.id) }
                    onMouseOver={() => {props.setselectedCard(props.id)}}
                    onMouseOut={() => {props.setselectedCard(props.contreId)}}
                    >

                        {/* {console.log("selectedCard value -> " + props.selectedCard + " this ID value ->  " + props.id )} */}
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