import logo from '../logo.svg';
import '../Page.css';
import Card from './Card';
import {projects} from '../ContentDatas/ProjectsContent.js';


function Page() {
  return (
    <>
    
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1>zerowaste.consulting</h1>

          <h2>Your marketing goals drive your technical tools.</h2>
          <p>
          Pay as you need.
          </p>    
        </header>
          
        <div className="cardsSection">
          <Card projects={projects} />
        </div>

        <div className="bgStyle"></div>
        
      </div>
    

    </>
  );
}

export default Page;
