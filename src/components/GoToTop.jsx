import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import styled from 'styled-components'

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

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;

    .top-btn{
        font-size: 2.4rem;
        width: 6rem;
        height: 6rem;
        color: #fff;
        background-color: ${({ theme }) => theme.colors.btn};
        box-shadow: ${({ theme }) => theme.colors.shadow};
        border-radius: 50%;
        position: fixed;
        bottom: 5rem;
        right: 5rem;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s ease-in-out;

        &:hover{
            color: ${({ theme }) => theme.colors.black};
        }

        &:active{
            color: ${({ theme }) => theme.colors.helper};
        }

        .top-btn-icon{
            animation: gototop 1.2s linear infinite alternate-reverse;
        }

        @keyframes gototop{
          0%{
            transform: translateY(-0.5rem);
          }
          100%{
            transform: translateY(1rem);
          }
        }
    }
`
export default GoToTop

