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
                    <span className='hero-top'>{top_batch} </span>
                    <h1 className='hero-heading text-red-500'>{title}</h1>
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

const Wrapper = styled.section`
padding: 9rem 0;

.hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.btn{
    max-width: 16rem;
}

.hero-top{
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color:${({ theme }) => theme.colors.helper};
}

hero-heading{
    text-transform: uppercase;
    font-size: 6.4rem;
}

.hero-para{
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
}

.hero-img-cont{
    display: flex;
    justify-content: center;
    align-items: center;
}

picture{
    text-align: center;
    
}

.hero-img{
    max-width: 80%;
    /* 80% of 1fr */
}

/* ---- Responsive styles ---- */
@media ( max-width: ${({ theme }) => theme.media.mobile}) {
   .grid{
gap:8rem;
   }
  }
`

export default HeroSec
