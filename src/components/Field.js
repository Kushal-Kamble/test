import React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Field = ({ name, email, index }) => {
  return (
   
      <div className="data-val">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Button variant="contained" color="error">
          Delete 
        </Button>
      </div>
 
  );
};

export default Field;
