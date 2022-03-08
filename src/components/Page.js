import React, { useState } from 'react';
import Header from './Header';
import Card from './Card';
import CardPop from "./CardPop";
import isInMiddleOfViewPort from '../tools/isInMiddleOfViewPort';
import {projects} from '../dataContent/projectsContent.js';


const Page = () => {

// Hooks:
const [selectedCard , setSelectedCard] = useState(null);

const [mouseOverStatus , setMouseOverStatus ] = useState([null,'noTouched']);

const [inTheMiddle , setInTheMiddle] = useState(0);

// Vars and stuffs from hooks:

let thisCardPop =  parseInt(selectedCard);

let [whichOver , overStatus] = mouseOverStatus; 

let atLeastOneCardIsOver = () => (overStatus === 'overCard') ? true : false;

const thisIsInTheMiddle = parseInt(inTheMiddle);

console.log("- - - inTheMiddle " + thisIsInTheMiddle);

// logs & stuffs:

// let [inTheMiddleState , inTheMiddleID] = inTheMiddle;

console.log("selectedCard -> " + selectedCard);

console.log ("-> mouseOverStatus -> " + mouseOverStatus);

console.log("whichOver -> " + whichOver);

console.log ("-> atLeastOneCardIsOver -> " + atLeastOneCardIsOver());

console.log(projects);

  const content =      
       
      <div className="Page"

      // onTouchStart={() => isInMiddleOfViewPort("card")} 

      onWheel={() => isInMiddleOfViewPort("card" , setInTheMiddle , inTheMiddle)}

      >    


       
    {/* <svg 
        className='smoothLight'
        viewBox="0 0 247 207"
        >
            <defs>
                <filter id='blur1' y="-50%" x="-50%" height="280%" width="280%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                </filter>
            </defs>

            <path 
            
            d="M129.2,109.8C60.9,157.2,26.9,153.1,9.6,128.3C-5.8,106.3-4,44.1,24.4,21.7c28.5-22.5,119-29.4,145.9-2.4
            C192.5,41.5,181.1,73.8,129.2,109.8z"
            filter='url(#blur1)'
            >
            
                
            </path>
        
      </svg> */}

     
      
      {isNaN(thisCardPop) && 
        <Header />
      }      
      
      {isNaN(thisCardPop) && 

      <div className="cardsSection">

        {      
            
          projects.map((project) =>             
          
            <Card 
            key={project.id}
            id={project.id}
            contreId={project.contreId}
            
            className={atLeastOneCardIsOver()?project.className_focus:project.className}
            
            className_2={project.className_2}
            className_3={project.className_3}
            className_4={project.className_4}
            className_5={project.className_5}    
            title={project.title}
            description={project.description}
            longtext={project.longtext}            
            bg={project.bg}
            link={project.link}
            image={project.image}
            altimage={project.altimage}
            // hooks:
            selectedCard={selectedCard}
            setSelectedCard ={setSelectedCard}
            mouseOverStatus={mouseOverStatus}
            setMouseOverStatus={setMouseOverStatus}
            overStatus={overStatus}
            setInTheMiddle={setInTheMiddle}
            inTheMiddle={inTheMiddle}
            // below thisIsInTheMiddle is inTheMiddle parsed to int type
            thisIsInTheMiddle={thisIsInTheMiddle}
            
            />
          
            
          )
           
        }
          
          
      </div>      

      }

      {isNaN(thisCardPop) !== true &&
            
            <CardPop
             key={projects[thisCardPop].id}
             id={projects[thisCardPop].id}
             contreId={projects[thisCardPop].contreId}
             className={projects[thisCardPop].className}
             className_2={projects[thisCardPop].className_2}
             className_3={projects[thisCardPop].className_3}
             className_4={projects[thisCardPop].className_4}
             className_5={projects[thisCardPop].className_5}    
             title={projects[thisCardPop].title}
             description={projects[thisCardPop].description}
             longtext={projects[thisCardPop].longtext}            
             bg={projects[thisCardPop].bg}
             link={projects[thisCardPop].link}
             image={projects[thisCardPop].image}
             altimage={projects[thisCardPop].altimage}
             selectedCard={selectedCard}
             setSelectedCard={setSelectedCard}
             mouseOverStatus={mouseOverStatus}
             setMouseOverStatus={setMouseOverStatus}          
            
             // closeCardPopStatus={closeCardPopStatus}
             // setCloseCardPopStatus ={setCloseCardPopStatus}
              />
                
        }

       

      {/* {isNaN(thisCardPop) &&
       
       
      <div className="bgStyle"></div>     
      } */}

              
        
      </div>   
    
  
      return (
        <>
            {content}
        </>
    );
}

export default Page;