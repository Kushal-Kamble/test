import "./App.css";

import Kushal from './components/Header-1'; // Application khuch bhi name rakh sakte hai for ex maine Kushal rkha

import Student from './components/Student-3';

import Demo from './components/Headerr';

function App() {
  let name =  "Kushal";
  return (

    

    
    <div className="container kushal">
      <div className="row ">  

        <Kushal/>

      <h1>{name}</h1>

      <Student name="vishal" age={25} />

      <Demo/>


      {/* props */}

      <Student name="vishal" age={30} />

      <Student name="salman" age={31} />

      <Student name="timepass" age={10} />

       
      
        
       
      </div>
    </div>




    
      
    
  );
}

export default App;
