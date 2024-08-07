import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Nav>
            <div className={openMenu ? 'menuIcon active' : 'menuIcon'}>
                <ul className='navbar_list'>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className='navbar_link' to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className='navbar_link' to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className='navbar_link' to="/service">Service</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className='navbar_link' to="/contact">Contact</NavLink>
                    </li>
                </ul>
                {/* menu icons */}
                <div className="mobile-navbar-btns">
                    <RxHamburgerMenu
                        name='menu-outline'
                        className='mobile-nav-icon'
                        onClick={() => setOpenMenu(true)}
                    />
                    <AiOutlineCloseCircle
                        name='close-outline'
                        className='close-outline mobile-nav-icon'
                        onClick={() => setOpenMenu(false)}
                    />
                </div>
            </div>
        </Nav>
    )
}

// Styles
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

.mobile-navbar-btns{
    display: none;
    position: relative;

    .close-outline{
        display: none;
    }
}

.mobile-navbar-btns[name="close-outline"]{
    display: none;
}

/* Responsive styles*/
@media (max-width: ${({ theme }) => theme.media.mobile}){
   
    .mobile-navbar-btns{
        display: inline-block;
        z-index: 999;
        border:${({ theme }) => theme.colors.black};
    }

    .mobile-nav-icon{
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
    }

    //Hide navbar list
    .navbar_list{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        display: none;
        transform: translateX(100%);
        transition: all .3s linear;
        z-index: 800;

        li{
        .navbar_link{
            &:link, &:visited{
                font-size: 2.8rem;
            }
        }
    } 
 }
    .active .mobile-nav-icon{
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color:${({ theme }) => theme.colors.black}
    }   

    .active .close-outline{
        display: inline-block;
        z-index: 1000;
    }

   .active .navbar_list{
        display: flex;
        transform:translateX(0)
    }
}

`

export default Navbar
