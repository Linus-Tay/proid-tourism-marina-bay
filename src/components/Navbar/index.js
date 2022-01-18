import React, { useState, useEffect } from 'react'
import { Nav, NavbarContainer, NavLogo, HamburgerIcon, NavMenu, NavItem, NavLink, NavButton, NavButtonLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <IconContext.Provider value={{color:"#fff"}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>Exerevnóntas</NavLogo>
                        <HamburgerIcon onClick={toggle}>
                            <FaBars />
                        </HamburgerIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLink to="about"
                                smooth={true} duration={500} spy={true} exact="true" offset={-80}
                                >About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="services"
                                smooth={true} duration={500} spy={true} exact="true" offset={-80}
                                >Plan</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="summary"
                                smooth={true} duration={500} spy={true} exact="true" offset={-80}
                                >Summary</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="signup"
                                smooth={true} duration={500} spy={true} exact="true" offset={-80}
                                >Sign Up</NavLink>
                            </NavItem>
                        </NavMenu>
                        <NavButton>
                            <NavButtonLink to="/signin">Sign In</NavButtonLink>
                        </NavButton>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
