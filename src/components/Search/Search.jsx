import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {

//show only character that match the user input
//need state to hold this value
const [query, setQuery] = React.useState("")


//https://rickandmortyapi.com/api/character/?name=rick


const handleSearch = (e) => {
    //stop page refresh
    e.preventDefault();
    //search for matches to query
    console.log('Searh for ', query)
    //make api call to get character that match
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(res =>{console.log(res.data.results)
    //what to do with this data
    //change what is in characters
    setCharacters(res.data.results)
    })
    .catch(err => {
        //check for no match
        if (err.response.status === 404){
            alert(`No characters named ${query}`)
        } else {
            console.log(err)
        }
    })

    //clear the textbox
    setQuery('')

}

  return (
    <form className='search-container' onSubmit ={handleSearch}>
        <input value={query} onChange={(e) => setQuery(e.target.value)}
        type="text" placeholder='Search All Characters' />

    </form>
  )
}

export default Search