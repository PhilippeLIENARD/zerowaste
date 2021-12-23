import React, { useState } from 'react';
import Header from './Header';
import Card from './Card';
import CardPop from "./CardPop";
import {projects} from '../dataContent/projectsContent.js';


const Page = () => {

const[selectedCard , setSelectedCard] = useState(null);

const[mouseOverStatus , setMouseOverStatus ] = useState([null,'noTouched']);

let [whichOver , overStatus] = mouseOverStatus; 

let atLeastOneCardIsOver = () => (overStatus == 'overCard') ? true : false;


// const[closeCardPopStatus , setCloseCardPopStatus ] = useState(null);

let thisCardPop =  parseInt(selectedCard);   

// let thisCloseCardPopStatus = String(closeCardPopStatus);

// console.log("selectedCard -> " + selectedCard);

// console.log ("-> mouseOverStatus -> " + mouseOverStatus);

// console.log("whichOver -> " + whichOver);


console.log ("-> atLeastOneCardIsOver -> " + atLeastOneCardIsOver());

// console.log(projects);


  const content =      
       
      <div className="Page">

     

      {isNaN(thisCardPop) && 
        <Header />}      
      
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
            selectedCard={selectedCard}
            setSelectedCard ={setSelectedCard}
            mouseOverStatus={mouseOverStatus}
            setMouseOverStatus={setMouseOverStatus}
            overStatus={overStatus}
            
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