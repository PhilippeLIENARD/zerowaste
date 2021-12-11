import React from 'react';
import imageCro from '../images/optimisation-CRO-google.jpg';


function PicTest(props){
    return <img src={imageCro} alt={props.alt}  />
}

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

    function addImageComponent(){
        // let thisComponent = <div className='test'></div>;
        let createComponent = document.createElement("PicTest");
        document.getElementById('xtra_1').appendChild(createComponent);


    }

    // console.log('imageCro -> ' + imageCro)
     
    const content = props.projects.map((project) =>    
            


                   
            <div 
            key={project.id}  
            // href={project.link}
            // target="_blank" 
            // rel="noreferrer noopener"
            className="card"
            style={{background: project.bg}}
            id={project.id}
            onClick={()=>{alertThis(project.title) ; isClicked() ; logFunction(project.id) ; addImageComponent() ;}}
                
            >
               
                {/* { (() => this.cardClicked === false) ? <PicTest alt={project.altimage} /> : null } */}
                
                <span id={project.extracontent}></span>

                {/* {logThis} */}
              
                {(project.id === 1) ? null : null}            
                        
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