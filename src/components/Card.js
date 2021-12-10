import React from 'react';
import imageCro from '../images/optimisation-CRO-google-ads.jpg';

function Card(props){    

    let cardClicked = false;    
    
    let logThis = console.log(props);
    
    function logFunction(cardId){
    
        return console.log('card id ->  ' + cardId + ' and status is -> ' + cardClicked);

    }
    

    function isClicked(){
        
        if (cardClicked === false) cardClicked = true;
        else if (cardClicked === true) cardClicked = false;
        return cardClicked;
       
    }

   
    
    function alertThis(dataCatch){
        return console.log('Alert ->  ' + dataCatch);
    }
  
    
    function addImage(thisImage, thisAlt){
        return <img scr={thisImage} alt={thisAlt} />
    }

   
     
    const content = props.projects.map((project) =>    
            
                   
            <div 
            key={project.id}  
            // href={project.link}
            // target="_blank" 
            // rel="noreferrer noopener"
            className="card"
            style={{background: project.bg}}
            id={project.id}
            onClick={()=>{alertThis(project.title) ; isClicked() ; logFunction(project.id) ;}}
                
            >
                {logThis}

                {(project.id === 1) ? addImage(imageCro , project.altimage) : null}            
                        
                <div>
               
                                
                    <h2>{project.title}</h2>

                    <p>{project.description}</p>

                </div>

            </div>  
    
    );
    
    return (
        <>
            {content}
        </>
    );

}


export default Card;