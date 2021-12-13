import React, { useState } from 'react';
import logo from '../images/logo.svg';
import '../Page.css';
import Card from './Card';
import {projects} from '../dataContent/projectsContent.js';


const Page = () => {

const[clickState , setClikState]= useState(null);

console.log(projects);

  const content =      
       
      <div className="Page">
        <header className="Page-header">
          <img src={logo} className="React-logo" alt="logo" />
          
          <h1>zerowaste.consulting</h1>

          <h2>Let your marketing goals drive your technical tools</h2>
          <p>
         Sharp invest by your needs
          </p>    
        </header>
          
        <div className="cardsSection">

        {      
            
            projects.map((project) => 
          
            <Card 
            key={project.id}
            id={project.id}
            className={project.className}
            className_2={project.className_2}
            className_3={project.className_3}  
            title={project.title}
            description={project.description}
            longtext={project.longtext}            
            bg={project.bg}
            link={project.link}
            image={project.image}
            altimage={project.altimage}
            clickState={clickState}
            setClikState={setClikState}
            
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