
import React, { useReducer, useContext, useEffect } from 'react'
import reducer from './reducer' // For actions

const AppContex = React.createContext() // Create a contex API

const API = "https://test-api-npj5.onrender.com/service"

const initialState = {
    top_batch: "",
    title: "",
    img: "",
    para: " ",
    services: [],
}


const AppProvider = ({ children }) => { // provider
    const [state, dispatch] = useReducer(reducer, initialState) // reducer is our action

    const updateHomePage = () => {
        return dispatch({
            type: "UPDATE_HOME_PAGE",
            payload: {
                top_batch: "This is",
                title: "Styled Components",
                img: "./hero.svg",
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, enim. Doloremque, eum? Tempore, quos! Consequatur, cumque. Consequuntur, quod. Quis, magnam."
            }
        })
    }

    const updateAboutPage = () => {
        return dispatch({
            // Dispatch will trigger the action
            type: "UPDATE_ABOUT_PAGE",
            payload: {
                top_batch: "From Here",
                title: "Know, who we are?",
                img: "./about.svg",
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, enim. Doloremque, eum? Tempore, quos! Consequatur, cumque. Consequuntur, quod. Quis, magnam."
            }
        })
    }

    // Fetch API
    useEffect(() => {
        const getService = async () => {
            try {
                const response = await fetch(API)
                const data = await response.json()
                // Note: dispatch will just inform the action
                dispatch({
                    type: "GET_DATA",
                    payload: data
                })
            }
            catch (error) {
                console.log(error)
            }
        }
        getService()
    }, [])

    return <AppContex.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
        {children}
    </AppContex.Provider>
};

//Global custom hook:
const useGlobalContext = () => {
    return useContext(AppContex)
}

export { AppContex, AppProvider, useGlobalContext }

