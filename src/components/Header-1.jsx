import Vishal from "./Footer-2";  // name khuch bhi de skte hai
import "../App.css";


// const TEST = () => {  // YE FUNCTION BNAYA

//     return(
//         <h1>Common Header HAI</h1> // YE JSX HAI
        
//     )
// } 






// export default TEST; // EXPORT KAR DIYA AAB HUME YE APP.JS ME IMPORT KARNA HAI

// export karne ke bad hi hum import kar sakte hai




function Header() {
    return(
        <div className="headertest">
          <h1 id="one">Common Header HAI BHAI</h1>
          <p style={{color: "black", backgroundColor: "pink"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, labore. test test</p>
          <Vishal/>
        </div>
    )
}

// component ky hai =>  humne ek function bnaya hai useke andar khuch design hai o export karna hai aur dusre file me import kar dena hai



// function Footer() {
//     return (
//         <h1>Footer hai bhai</h1>
//     )
// }


export default Header;

// export {Header,Footer} 

// export {Header}



