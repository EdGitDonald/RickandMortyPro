import React from 'react'
import './Episodes.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Episodes() {
  //create state for the numbers of episodes
  const [options, setOptions] = React.useState([])
  //create state to hold option selected
  const [selectedOption, setSelectedOption] = React.useState(1)
  
  const[selectedEpisode, setSelectedEpisode] = React.useState()

  const [characterList, setCharacterList] = React.useState([])

  //when page loads i need to know how many episodes
  React.useEffect(
    ()=>{
      console.log('loaded')
      //make api call to get number of episodes
      //https://rickandmortyapi.com/api/episode
      axios.get(`https://rickandmortyapi.com/api/episode`)
      .then(res =>{
        console.log(res.data.info.count)
        //I need to create an array with the numbers
        //from 1 to this value
        const newOptions = []
        for (let i = 1; i <= res.data.info.count; i++){
          newOptions.push(i)
        }
        console.log(newOptions)
        //store this in state
        setOptions(newOptions)
        //fetchEpisodeData()
      })
      .catch(err => console.log(err))

    }, []  //empty means run one time when page loads
  )

  const handleSelectChange = (e) => {
    console.log('change', e.target.value)
    //store in state
    setSelectedOption(e.target.value)
    //could get episode data here
  }

  const fetchEpisodeData = async ()=> {
    //need to make multiple api calls to get data
    //https://rickandmortyapi.com/api/episode/28

    try{
      //make api call, wait for result
      const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)

      console.log(res.data)
      //store episode data in state
      setSelectedEpisode(res.data)

      //res.data.characters has all endpoints to 
      //get character info
      //need to make all these api calls and gather the results
      const episodeCharacters = await Promise.all(
        res.data.characters.map(url => {
          return axios.get(url).then(res => res.data)
        })
      )
      console.log(episodeCharacters)
      //store infoformation in state
      setCharacterList(episodeCharacters)

    }
    catch(err){
      console.log(err)
    }
  }




  React.useEffect(
    ()=> {
      console.log('get episode', selectedOption)
      //call function to get data
      fetchEpisodeData()
      
    }, [selectedOption] //runs anytime selectedOption changes
  )

  return (
    <div className='episodes-container'>
    <div>
      <label>Select a episode</label>
      <select id="select-episode" onChange={handleSelectChange}>
        {
          options.map(num => 
            <option key={num} value={num}>{`Episode ${num}`}</option>)
        }
      </select>
    </div>
    <div>
      <div className='episode-info'>
        <p>Episode Name: {selectedEpisode?.name}</p>
        <p>Air Date: {selectedEpisode?.air_date}</p>
      </div>
      <div className='character-container'>
        {
           characterList.map(item =>< CharacterCard 
            key={item.id}
            character={item} />)
            //make sure to import character card at top of page
            //use state call to collect the data to fill out character cards
        }

      </div>

    </div>
    </div>
  )
}

export default Episodes