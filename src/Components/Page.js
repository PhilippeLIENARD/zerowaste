import logo from '../logo.svg';
import '../Page.css';
import Card from './Card';
import {projects} from '../ContentDatas/ProjectsContent.js';


function Page() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
         <h1>ZeroWaste.consulting</h1>

         <h2>Pay as you need</h2>
         <p>
         Your marketing goal drives your technical tools.
        </p>    
      </header>
      <Card projects={projects} />
    </div>
  );
}

export default Page;
