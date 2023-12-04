import "./App.css";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import AddIcon from '@mui/icons-material/Add';
import React, {useState, useEffect} from "react";
// import Field from "./components/Field";

function App() {

  const [state, setState] = useState(1);

  const [data, setData] = useState([]);

  // useEffect  => USEEFFECT KA USE HUM DATA FETCH KARNE KE LIYE AUR API SE DATA GET KARN EKE LIYE USEEFFECT KA USE HOTA HAI
  
  useEffect(() => {
    // window.alert("useEffect called");

    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}10&idStarts=100`); // ` backtik ke andar variable ka  use kar skte hai

      const res = await get.json();
      setData(res);
      console.log(res);
    }

    getData();

    document.title = `(${state}) Kitna data hai`

  }, [state])

  // console.log("function body");



  return (
    <div className="container kushal">
      <div className="row ">
        <div className="two">
          <h1>useEffect hook</h1>

          {/* {  console.log("insite JSX")} */}

          <button onClick={() => setState(state+1)}>click me {state}</button>

          {
            data.map((element, index) => {
              return (
                <div className="data1" key={index}>
                  <h4>{element.firstName}</h4>
                  <h4>{element.lastName}</h4>
                  <h4>{element.email}</h4>
                  <h4>{element.contactNumber}</h4>
                </div>
              )
            })
          }





        </div>
        
      </div>
    </div>
  );
}

export default App;
