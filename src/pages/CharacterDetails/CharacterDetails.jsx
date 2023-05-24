import React, { useEffect } from 'react'
import './CharacterDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard';

function CharacterDetails() {
    //show data for a specific character
    //the id is in the url
    //to get data , use hook to retrieve the value
    const {characterId} = useParams()

    //state to hold character data
    const[character, setCharacter] = React.useState('')

    //https://rickandmortyapi.com/api/character/2
    //I need to get the data when the page loads
    React.useEffect(
        ()=>{
            console.log('details')
            //make api call to get character data
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res =>{
                console.log(res.data)
                //I have the data, where do i put the data
                //create a state to hold character data
                setCharacter(res.data)
            
            })
            .catch(err => console.log(err))


        },[] //this means run once when page loads
    )

  return (
    <div className="details-container">
        <img src={character.image} />
        <div className="container-info">
            <p>Name: {character?.name}</p>
            <p>Gender: {character?.gender}</p>
            <p>Location: {character?.location?.name}</p>
            <p>Species: {character?.species}</p>

        </div>
    </div>
  )
}

export default CharacterDetails