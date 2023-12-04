
import Comp from './Comp-5';
import propTypes from 'prop-types'


// import React from 'react' 

// const Student = (props) => {
//   return (
//     <h1 style={{color: "red"}}>Student   {props.name}   {props.age}  </h1>


//   )
// }

// export default Student

// rafce

import React from 'react'

// const Student = ({props}) => {
//   return (
//     <div>
//    <div>
//     <h1>{props.name}</h1>
//     <h1>{props.age}</h1>
//     <Comp/>
//    </div>
      
//     </div>
//   )
// }

const Student = ({name, age}) => {
  return (
    <div>
   <div>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <Comp/>
   </div>
      
    </div>
  )
}

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
}

export default Student-3

