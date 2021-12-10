import logo from '../images/logo.svg';
import imageCro from '../images/optimisation-CRO-google-ads.jpg';
import '../Page.css';
import {projects} from '../dataContent/ProjectsContent.js';
import Card from './Card';



function Page() {
  return (
    <>
       
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
          <Card projects={projects}>
          </Card>
        </div>

        <div className="bgStyle"></div>
        
      </div>
    

    </>
  );
}

export default Page;
