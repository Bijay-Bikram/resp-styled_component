import React, { useEffect } from 'react'
import HeroSec from '../components/HeroSec'
import { useGlobalContext } from '../Contex'
import Service from './Service'
import Contact from './Contact'

const Home = () => {
    const { updateHomePage } = useGlobalContext()

    useEffect(() => {
        updateHomePage()
    }, [])

    return (
        <div>
            <HeroSec />
            <Service />
            <Contact />

        </div>
    )
}

export default Home
