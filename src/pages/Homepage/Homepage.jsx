import React, {useEffect, useState, useContext} from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'
import { ThemeContext } from '../../contexts/ThemeContext'


function Homepage() {

    //use context for global state
  //NOTE { } NOT []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

    //create state to hold character data
    const [characters, setCharacters] = useState([])
    //show all characters when the page loads
    //https://rickandmortyapi.com/api/character

    //set up useEffect to run when page loads
    useEffect(
        ()=>{
            console.log('homepage loaded')
            //make api call to get the data
            axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res =>{
                console.log(res.data.results)
                //store this data in state
                setCharacters(res.data.results)
            })
            .catch(err => console.log(err))


        }, [] //empty array means run once when page loads

    )

  return (
    <div className={darkMode?"home-container home-dark":"home-container"}>
        <Search setCharacters={setCharacters}/>
        <h1>Main Characters</h1>
        <div className="characters-container">
            {
                characters.map(item=><CharacterCard 
                    key={item.id}
                    character={item} />)
            //  characters.map(item=><p key={item.id}>{item.name}</p>)
            }
            
        </div>
    </div>
  )
}

export default Homepage