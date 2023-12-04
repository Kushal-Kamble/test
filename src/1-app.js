import "./App.css";

import {Header} from './components/Header'; // Application khuch bhi name rakh sakte hai

import Student from './components/Student';

function App() {
  let name =  "Kushal";
  return (

    

    
    <div className="container kushal">
      <div className="row ">  

        <Header/>

      <h1>{name}</h1>

      <Student name="kushal" age={25} />
      <Headerr/>

      {/* <Student name="vishal" age={30} />

      <Student name="salman" age={31} />

      <Student name="timepass" age={10} /> */}

      <h1>my first commit</h1>
      <h1>my Second commit</h1>

       
      
        
       
      </div>
    </div>




    
      
    
  );
}

export default App;
