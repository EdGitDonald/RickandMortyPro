import React, {useContext} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'
import Favorites from '../../pages/Favorites/Favorites';


function Header() {
  //create variable for darkmode
  //const darkMode = false;
  //const[darkMode, setDarkMode] = React.useState(false)

  //use context for global state
  //NOTE { } NOT []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?"header-container header-dark":"header-container"}>
        <div>
            <Link to='/' style={{marginRight:"10px"}}>Home</Link>
            <Link to='/about' style={{marginRight:"10px"}}>About</Link>
            <Link to='/episodes'>Episodes</Link>
        </div>
        <Link to='/favorites'>My Favorites</Link>
        <button className={darkMode?"theme-button theme-button-dark":"theme-button"}
           onClick={()=>setDarkMode(!darkMode)}>
          {
            darkMode?
            "Light Mode"
            :
            "Dark Mode"
          } 
        </button>

    </div>
  )
}

export default Header