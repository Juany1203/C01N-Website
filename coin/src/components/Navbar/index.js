import React  from 'react';
import {FaBars} from 'react-icons/fa'
//mport { NavLink } from 'react-router-dom';
import {animateScroll as scroll}  from 'react-scroll';
import {Nav,NAvbarContainer, NavbarLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements';
const Navbar = ({toggle}) => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    };
    return (
        <>
            <Nav>
                <NAvbarContainer>
                    <NavbarLogo to='/' onClick={toggleHome}>C01N</NavbarLogo>
                    <MobileIcon onClick= {toggle}> 
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="About" smooth={true} duration={500} spy={true} exact='true' offset={-70 } activeClass="active">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Services" smooth={true} duration={500} spy={true} exact='true' offset={-70}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="SignIn" smooth={true} duration={500} spy={true} exact='true' offset={-70}>Sign In</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="SignUp" smooth={true} duration={500} spy={true} exact='true' offset={-70}>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/Crypto'>Crypto</NavBtnLink>
                    </NavBtn>
                </NAvbarContainer>
            </Nav>

        </>
    );
}

export default Navbar;
