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

// console.log("- - - inTheMiddle " + thisIsInTheMiddle);

// // logs & stuffs:

// let [inTheMiddleState , inTheMiddleID] = inTheMiddle;

// console.log("selectedCard -> " + selectedCard);

// console.log ("-> mouseOverStatus -> " + mouseOverStatus);

// console.log("whichOver -> " + whichOver);

// console.log ("-> atLeastOneCardIsOver -> " + atLeastOneCardIsOver());

// console.log(projects);

  const content =      
       
      <div className="Page"

      onTouchStart={() => isInMiddleOfViewPort("card" , setInTheMiddle , inTheMiddle)} 

      onTouchEnd={() => isInMiddleOfViewPort("card" , setInTheMiddle , inTheMiddle)} 

      onScroll={() => isInMiddleOfViewPort("card" , setInTheMiddle , inTheMiddle)}       

      onWheel={() => isInMiddleOfViewPort("card" , setInTheMiddle , inTheMiddle)}

      >    

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

      {isNaN(thisCardPop) &&
      <div className="bgStyle"></div>     
      }

              
        
      </div>   
    
  
      return (
        <>
            {content}
        </>
    );
}

export default Page;