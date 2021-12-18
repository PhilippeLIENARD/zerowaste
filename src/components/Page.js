import React, { useState } from 'react';
import Header from './Header';
import '../Page.css';
import Card from './Card';
import CardPop from "./CardPop";
import {projects} from '../dataContent/projectsContent.js';


const Page = () => {

const[selectedCard , setselectedCard]= useState(null);

let thisCardPop =  String(selectedCard);   

console.log ("-> thisCardPop -> " + thisCardPop);

// let selectStatus = () => (selectedCard === null) ? false : true ;

// console.log("selectStatus() ? -> " + selectStatus());

console.log(projects);

  const content =      
       
      <div className="Page">

     <Header />

      {/* {selectStatus() && 
        <Header />} */}

      {isNaN(thisCardPop) !== true &&
            
         <CardPop
          title={projects[thisCardPop].title}
          bg={projects[thisCardPop].bg}
           />
             
      }   
      
      
      <div className="cardsSection">

        {      
            
            projects.map((project) => 
          
            <Card 
            key={project.id}
            id={project.id}
            contreId={project.contreId}
            className={project.className}
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
            setselectedCard ={setselectedCard}
            
            />
            
            )
           
        }
          
          
      </div>

        <div className="bgStyle"></div>            
        
      </div>    

    
      
      return (
        <>
            {content}
        </>
    );
}

export default Page;