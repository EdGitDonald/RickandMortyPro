import {useState, createContext, useEffect} from 'react'

export const ThemeContext = createContext();

export default function ThemeContextProvider(props){
    //create my global state
    const [darkMode, setDarkMode] = useState(false)

   useEffect(
        ()=>{
            console.log('context loaded')
            const storedDarkMode = localStorage.getItem('darkMode')
            console.log("stored value is ", storedDarkMode)
            //check if something was there and
            //if so use that value to initialize
            if (storedDarkMode){
                //set with this value
                setDarkMode(JSON.parse(storedDarkMode))
            }

        }, [] //run one time when contex loads
    )

    

    useEffect(
        ()=>{
            console.log('darkMode is ', darkMode)
            //save new state of darkMode when it changes
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
        }, [darkMode]
    )

    return(
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )

}
