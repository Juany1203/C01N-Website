import React from 'react';
import {FaBars} from 'react-icons/fa'
//mport { NavLink } from 'react-router-dom';
import {Nav,NAvbarContainer, NavbarLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements';
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NAvbarContainer>
                    <NavbarLogo to='/'>C01N</NavbarLogo>
                    <MobileIcon onClick= {toggle}> 
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="About">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="SignIn">Sign In</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="SignUp">Sign Up</NavLinks>
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
