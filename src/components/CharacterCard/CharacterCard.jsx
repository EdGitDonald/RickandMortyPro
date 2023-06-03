import React, {useContext} from 'react'
import './CharacterCard.css'
import {Link} from 'react-router-dom'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { FavoritesContext } from '../../contexts/FavoritesContext'

function CharacterCard({character}) {

//use context for global state
  //NOTE { } NOT []
  const {favorites, addCharacter, removeCharacter} = useContext(FavoritesContext)

  //create variablle for hearts
  //const isFavorite = false;
  const [isFavorite, setIsFavorite] = React.useState(false)

  React.useEffect(
    ()=> {
      //console.log('update')
      //Is this character in favorites?
      setIsFavorite(favorites.find(item=> item.id === character.id))
      //not found is undefined which is "falsy"

    }, [favorites]
  )

  return (
    <div className="character-card">
        <img src={character?.image} />
        <p>{character?.name}</p>
        <Link to={`/details/${character?.id}`}>See Details</Link>
        {
          isFavorite?
          <FaHeart className='heart-icon' onClick={()=>removeCharacter(character.id)}/>
          :
          <FaRegHeart className='heart-icon' onClick={()=>addCharacter(character)}/>
        }
    </div>
  )
}

export default CharacterCard