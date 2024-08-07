import React, { useEffect } from 'react'
import HeroSec from '../components/HeroSec'
import { useGlobalContext } from '../Contex'

const About = () => {
    const { updateAboutPage } = useGlobalContext()

    useEffect(() => {
        updateAboutPage()
    }, [])

    return (
        <div>
            <HeroSec />
        </div>
    )
}

export default About
