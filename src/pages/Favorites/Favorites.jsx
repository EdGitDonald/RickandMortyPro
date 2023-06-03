import React, { useContext } from 'react'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import './Favorites.css'


function Favorites() {
  //use context for global state
  //NOTE { } NOT []
  const {favorites} = useContext(FavoritesContext)


  return (
    <div className='favorites-container'>
        <h1>My Favorite characters</h1>
        <div className='favorite-characters'>
            {
                favorites.length > 0?
                 favorites.map(item=><CharacterCard 
                    key={item.id}
                    character={item} />)
                    :
                    <p>No favorites selected yet</p>
            }

        </div>
    </div>
  )
}

export default Favorites