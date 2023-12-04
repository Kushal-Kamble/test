

// const Movies = ({img, title, year}) => {
//   return (
//     <div className="movie">
//         <h1>movies</h1>
//         <img src={img} alt="" />
//         <p>Title: {title} </p>
//         <p>Year: {year} </p>
       
        
      
//     </div>
//   )
// }

// export default Movies


const Movies = (props) => {
  return (
    <div className="movie">
        <h1>movies</h1>
        <img src={props.img} alt="" />
        <p>Title: {props.title} </p>
        <p>Year: {props.year} </p>
       
        
      
    </div>
  )
}

export default Movies
