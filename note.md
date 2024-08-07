## 1. Navlink doesn't reload the page
"<NavLink>" will only re-render updated components matched with the URL path of the Route without reloading page<br>

## 2. GlobalStyle in styled components:
- We can create GlobalStyles in external js file from styled-components<br>

<b>GlobalStyle.js</b>
```
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    html{
        font-size: 62.5%; 
        overflow-x: hidden;
    }

    h1{
        color:${({ theme }) => theme.colors.header};
        font-size: 6rem;
    }
    h2{
        color:${({ theme }) => theme.colors.header};
        font-size: 4.4rem;
        font-weight: 300;
        white-space: normal;
        text-align: center;
    }
    h3{
        font-size: 1.8rem;
        font-weight: 400;
    }
    p{
        color:${({ theme }) => theme.colors.text};
        opacity: .7;
        font-size: 1.65rem;
        line-height: 1.5;
        margin-top: 1rem;
        font-weight: 400;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
`
```
- Now, we can use GlobalStyle by importing GlobalStyle in App.jsx as component <br>
```
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle.js'

const App = () => {
  const theme = {
    colors: {
      header: '#101313',
      text: '#0f0b0b',
      white: '#fff',
      black: "#212529",
      helper: "#8490ff",
      bg: '#f5f5f5',
      footer_bg: '#0a1435',
      btn: "rgb(98,84,243)",
      border: 'rgba(98,84,243,0.5)',
      hr: '#ffffff',
      gradient: "linear-gradient(93.12deg, #fcb045 0.52%, #fd1f8e 100%)",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport: 'rgba(0,0,0,0.16) 0px 1px 4px'

    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> {/* global style */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='service' element={<Service />} />
          <Route path='about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
```

## 3. We can use class & Nested class in styled components alike scss:
Note: we can use class and id similar to css in style-components<br>
use "&" to use pseudo selector<br>
```
const Nav = styled.nav`
.navbar_list{
    display: flex;
    gap: 4.8rem;

    li{
        list-style: none;

        .navbar_link{
              &:link, &:visited{
                  display:inline-block;
                  text-decoration: none;
                  font-size: 1.8rem;
                  text-transform: uppercase;
                  color: ${({ theme }) => theme.colors.black};
                  transition:color 0.3s linear;
              }
               &:hover, &:active{
                             color: ${({ theme }) => theme.colors.helper};
                                }
        }
    }

    
}
`
```

## 4. Access public files from anywhere:
Note: We can access public file from anywhere, just using './file_name'<br>
We don't need full path to access file<br>

## 5. Contex API & useContext hook:
- To understand this:
```
// Create a contex (warehoure for data) ---> Context API
// provider
// consumer --> useContext hook
```
- Then, create Contex.jsx file to store data <br>
<b>Contex.jsx</b>
```
// Create a contex (warehoure for data) ---> Context API
// provider
// consumer --> useContext hook

import React from 'react'

const AppContex = React.createContext() // Create a contex API

const AppProvider = ({ children }) => { // provider
    return <AppContex.Provider value={"Hello"}>
        {children}
    </AppContex.Provider>
};

export { AppContex, AppProvider }
```
- Then, use Provider to wrap App <br>
<b>main.jsx</b>
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Contex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </AppProvider>
)
```
- Now, we can use Contex API in any component like this: <br>
<b>HeroSec.jsx</b>
```
import React, { useContext } from 'react'
import { AppContex } from '../Contex'

const HeroSec = () => {
    const firstWord = useContext(AppContex)

    return (
//...
    )
}
```
- But we can minimize this process using custom hook: <br>
At first, create custom hook in "Contex.jsx" file <br>
<b>Contex.jsx</b>
```
// Create a contex (warehoure for data) ---> Context API
// provider
// consumer --> useContext hook

import React from 'react'

const AppContex = React.createContext() // Create a contex API

const AppProvider = ({ children }) => { // provider
    return <AppContex.Provider value={{word:"Hello"}}>
        {children}
    </AppContex.Provider>
};

//Global custom hook:
const useGlobalContext = () => {
    return React.useContext(AppContex)
}

export { AppContex, AppProvider, useGlobalContext }
```
- Then, use like this in any component: <br>
```
import { useGlobalContext } from '../Contex'

const HeroSec = () => {
    const {word} = useGlobalContext()

    return (
//...
    )
}
```

## 6. useReducer hook with useContext hook:
It is not necessary to use this hook in a small project or where it is not necessary.<br>

- Create a dispatch and state in "Contex.jsx" file <br>
<b>Contex.jsx</b>
```
import React, { useReducer, useContext } from 'react'
import reducer from './reducer' // For actions

const AppContex = React.createContext() // Create a contex API

const initialState = {
    top_batch: "",
    title: "",
    img: "",
    para: " "
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

    return <AppContex.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
        {children}
    </AppContex.Provider>
};

//Global custom hook:
const useGlobalContext = () => {
    return useContext(AppContex)
}

export { AppContex, AppProvider, useGlobalContext }
```
- Then, create actions in "reducer.jsx" file <br>
<b>reducer.jsx</b>
```

// Actions
const reducer = (state, action) => {

    if (action.type === "UPDATE_HOME_PAGE") {
        return {
            ...state,
            top_batch: action.payload.top_batch,
            title: action.payload.title,
            img: action.payload.img,
            para: action.payload.para
        }
    }
    if (action.type === "UPDATE_ABOUT_PAGE") {
        return {
            ...state,
            top_batch: action.payload.top_batch,
            title: action.payload.title,
            img: action.payload.img,
            para: action.payload.para
        }
    }
    return state
}

export default reducer
```
- Then, you can use it in any page <br>
<b>Home.jsx</b>
```
import React, { useEffect } from 'react'
import HeroSec from '../components/HeroSec'
import { useGlobalContext } from '../Contex'

const Home = () => {
    const { updateHomePage } = useGlobalContext()

    useEffect(() => {
        updateHomePage()
    }, [])

    return (
        <div>
            <HeroSec />
        </div>
    )
}

export default Home
```
- Now, you can use state property value in any component: <br>
<b>HeroSec.jsx</b>
```
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { useGlobalContext } from '../Contex'

const HeroSec = () => {
    const { top_batch, title, img, para } = useGlobalContext()

    return (
        <Wrapper>
            <div className="container grid grid-two-col">
                {/* for content */}
                <div className="hero-data">
                    <p className='hero-top'>{top_batch} </p>
                    <h1 className='hero-heading'>{title}</h1>
                    <p className='hero-para'>
                        {para}
                    </p>
                    <Button className="btn hireme-btn">
                        <NavLink to="/contact">Get Start</NavLink>
                    </Button>
                </div>
                {/* for image */}
                <div className="hero-img-cont">
                    <picture>
                        <img className='hero-img' src={img} alt="hero_img" />
                    </picture>
                </div>

            </div>
        </Wrapper>
    )
}

export default HeroSec
```

## 7. We can declare variables & return JSX element inside map function:
<b>Service.jsx</b>
```
const Service = () => {
    const { services } = useGlobalContext()
    return (
        <>
            {services.length !== 0 ? (
                <Wrapper className='section'>
                    <h2 className='common-heading'>Our Services</h2>
                    <div className='container grid grid-three-col'>
                        {services.map((curElem) => {
                            const { id, title, image, description } = curElem;
                            return (
                                <div className='card' key={id}>
                                    <figure>
                                        <img src={image} alt={title} />
                                    </figure>
                                    <div className='card-data'>
                                        <h3 className='text-4xl'>{title}</h3>
                                        <p className='text-red-500'>{description}</p>
                                        <Button className='btn'>Read More</Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Wrapper>
            ) :
                (
                    <Spinner />
                )
            }
        </>
    )
}
```

## 8. Frontend email service from "Formspree"
Formspree provide a free service for frontend email service.<br>

## 9. Create Error page using path "*" :

## 10.  "justify-self" and "align-self" css properties:
- <b>justify-self</b> => mdn: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self <br>
To adjust the alignment of an element horizontally.

- <b>align-self</b> => mdn: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self <br>
To adjust the alignment of an element vertically.

## 11. To Style Scrollbar in Web Page:
<b>GlobalStyle.js</b>
```
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    //...

    ::-webkit-scrollbar{
        width: .9rem;
    }
    
    ::-webkit-scrollbar-track{
        background-color: ${({ theme }) => theme.colors.bg};
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.colors.helper};
        border-radius: 1rem;
    }

    // ...
`
```

## 12. Reusable Styles for elements:
Note : We can create a reusable styles for element using styled-components.<br>
```
 styles
  - Button.js
```
<b>Button.js</b>
```
import styled from "styled-components";

export const Button = styled.button`
text-decoration: none;
max-width: auto;
background-color: rgb(98 84 243);
color: rgb(255 255 255);
padding: 1.4rem 2.4rem;
border: none;
text-transform: uppercase;
text-align: center;
cursor: pointer;
transition: all 0.3s ease;
-webkit-transition: all 0.3s ease 0s;
-moz-transition: all 0.3s ease 0s;
-o-transition: all 0.3s ease 0s;

&:hover,&:active{
    box-shadow: 0 2rem 2rem 0 rgba(132, 144, 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
}

a{
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
}
`
```

## 13. Page scroller through "window.scrollTo()":
<b>GoToTop.jsx</b>
```
const GoToTop = () => {
    const [scrollVal, setScrollVal] = useState(0)

    // Got to the top of the page
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    const listenToScroll = () => {
        setScrollVal(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)

        if (scrollVal > 300) {
            document.querySelector('.top-btn').style.display = 'flex'
        } else {
            document.querySelector('.top-btn').style.display = 'none'
        }

        // Clear the previous event listener
        return () => window.removeEventListener('scroll', listenToScroll)
    }, [scrollVal])


    return (
        <Wrapper>
            <div className='top-btn' onClick={goToBtn}>
                <FaArrowUp className='top-btn-icon' />
            </div>
        </Wrapper>
    )
}
```

## 14. Secret Tips for Mobile Responsive font-size:
Note: Use percentage for font-size of root element<br>
Don't forget to use "rem" unit for font-size.<br> 
```
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
//...
 @media ( max-width: ${({ theme }) => theme.media.mobile}) {
    html{
        font-size: 50%;
    }
   .grid-two-col, .grid-three-col,.grid-four-col{
    grid-template-columns: 1fr;
    }
  }
`
```

## 15.



