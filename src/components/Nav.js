import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className='header1'>
        <Link to={'/'}><h1 style={{color: 'black', cursor: 'pointer'}}>Home</h1></Link>
        <Link to={'/about'}><h1 style={{color: 'black' ,cursor: 'pointer'}}>About</h1></Link>
        <Link to={'/contact'}><h1 style={{color: 'black',cursor: 'pointer'}}>Contact</h1></Link>
        <Link to={'/gallary'}><h1 style={{color: 'black',cursor: 'pointer'}}>Gallary</h1></Link>

      
    </div>
  )
}

export default Nav
