import "./App.css";

import Headerr from "./components/Headerr-4";

import Movies from "./components/Movies";

import demo from "./components/movies.json";





function App() {

  // let login = false;

  // if(login == false){
  //   return <h1>ja me nahi dikhaunga</h1>
  // }

  
 
  return (

    

    
    <div className="container kushal">
      <div className="row ">

      {/* ?   => agar ye condition false hai to ky dekhna hai ye likha aana chahiye */}
      {/* {
         login == false ? <Headerr/>  : <div style={{color: "red"}}>Dekh le bhai true hai</div>
      } */}


     {/* {
       (() => {

        if(login) {
          return <Headerr/>
        }else{
          return <div style={{color: "red"}}>Dekh mat lena</div>
        }
        

       })()
 
     } */}
      <Headerr/>

       <div className='main'>

        {
          demo.map((element, index) => {

            return(


            <Movies 
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}

            />

            )

          })
        }

        


       </div>

        

       
      
        
       
      </div>
    </div>




    
      
    
  );
}

export default App;


// const obj = {name : 'kushal', age : 25}
// undefined
// obj
// {name: 'kushal', age: 25}
// obj.name
// 'kushal'
// obj.age
// 25
// const {name, age} = obj
// undefined
// name
// 'kushal'
// age
// 25
