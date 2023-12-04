import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
// import Field from "./components/Field";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeItem = (index) => { // index ko get kiya

    let arr = data;
    arr.splice(index, 1)
    setData([...arr]);

    // data.splice(index, 1); // splice => method ek ya perticular kitne bhi element remove kar skte hai

  }

  return (
    <div className="container kushal">
      <div className="row ">
        <div className="two">
          <h1>Record</h1>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col md-10">
              <div className="form">
                <Stack direction="row" spacing={2}>
                  <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <Button onClick={addData} variant="contained" color="success">
                    <i class="fa-solid fa-plus text"></i>{" "}
                  </Button>
                </Stack>
              </div>
            </div>
            {/* form */}

            {/* data */}
            <div className="data">
              <div className="data-val">
                <h4>Name</h4>
                <h4>Email</h4>
                <h4>Remove</h4>
              </div>
              {data.map((element, index) => {
                return (
                  <div key={index} className="data-val">
                    <h4>{element.name}</h4>
                    <h4>{element.email}</h4>
                    <Button onClick={() => removeItem(index)} variant="contained" color="error"> 
                      Delete
                    </Button>
                    {/* index  =>  pass kiya */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
