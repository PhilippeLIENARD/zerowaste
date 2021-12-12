import logo from '../images/logo.svg';
import '../Page.css';
import Card from './Card';
import {projects} from '../dataContent/projectsContent.js';


const Page = () => {
 
console.log(projects);



  const content =    

  
       
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
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
            title={project.title}
            description={project.description}
            // bigPicture={project.bigPicture}
            bg={project.bg}
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