import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <Wrapper>
            <section className="get-started">
                <div className='grid grid-two-col'>
                    <div>
                        <h3>Ready to get started?</h3>
                        <h3>Talk to us today</h3>
                    </div>

                    <div className='get-start-btn'>
                        <NavLink to="/">
                            <Button className="btn ">Get Started</Button>
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Footer section */}
            <footer>
                <div className='container grid grid-four-col'>
                    <div className='footer-about'>
                        <h3>Styled Components</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, praesentium.</p>
                    </div>

                    {/* 2nd column */}
                    <div className='footer-subscribe'>
                        <h3>Subscribe to get Important updates</h3>
                        <form action='#'>
                            <input
                                type="email"
                                placeholder='Email'
                                required autoComplete='off'
                            />

                            <input type="submit" value="Subscribe" />

                        </form>
                    </div>

                    {/* 3rd column */}
                    <div className='footer-social'>
                        <h3>Follows us</h3>
                        <div className='footer-social-icons'>
                            <div>
                                <a href="https://youtu.be/Wf7EAA7j57o?si=yD6sUyfCfm-4-LGE" target='_blank'><FaYoutube className='icon' /></a>
                            </div>
                            <div>
                                <a href="" target='_blank'> <FaFacebook className='icon' /></a>
                            </div>
                            <div>
                                <a href='' target='_blank'><FaTwitter className='icon' /></a>
                            </div>
                        </div>
                    </div>

                    {/* 4th column */}
                    <div className='footer-contact'>
                        <h3>Call Us</h3>
                        <p>+97 1234567890</p>
                    </div>

                </div>

                {/* Bottom-section */}
                <div className='footer-bottom-section'>
                    <hr />
                    <div className='container grid grid-two-col'>
                        <p>
                            @{new Date().getFullYear()} Styled Components. All Rights Reserved
                        </p>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>
                    </div>
                </div>
            </footer>

        </Wrapper>
    )
}

const Wrapper = styled.section`
position: relative;
bottom: 0;

 .get-started{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%); 

    .grid div:last-child{
    justify-self: end;
    align-self: center;
 }
 }

 

 .footer-social-icons{
    display: flex;
    gap: 2rem;

    div{
        padding: 1rem;
        border: 2px solid ${({ theme }) => theme.colors.white};
        border-radius: 50%;

        .icon{
            color: ${({ theme }) => theme.colors.white};
            font-size: 2.4rem;
            position: relative;
            cursor: pointer;
        }
    }
 }

 .footer-contact{
      align-self: start;
        /* background-color: red; */
    }  

.footer-bottom-section{
    padding-top: 3rem;
    /* padding-bottom: 5rem; */
    hr{
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
    }
}

/* Responsive styles */
 @media ( max-width: ${({ theme }) => theme.media.mobile}) {
   .get-started{
    max-width: 90vw;
    padding: 2rem 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .get-start-btn{
        margin: auto;
        align-self: center;
    }
   }

  }
`

export default Footer
