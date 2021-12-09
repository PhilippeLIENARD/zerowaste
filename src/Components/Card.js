import React from 'react';
import { projects } from '../ContentDatas/ProjectsContent';





function Card(props){    

    let logThis = console.log(props);
    
    function alertThis(dataCatch){
        return console.log('Alert ->  ' + dataCatch);
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
            onClick={()=>alertThis(project.title)}
                
            >
                {logThis}
               

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