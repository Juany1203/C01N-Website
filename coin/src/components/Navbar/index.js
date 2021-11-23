import React from 'react';
import {FaBars} from 'react-icons/fa'
//mport { NavLink } from 'react-router-dom';
import {Nav,NAvbarContainer, NavbarLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NAvbarContainer>
                    <NavbarLogo to='/'>C01N</NavbarLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="About">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Crypto">Crypto</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="SignUp">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NAvbarContainer>
            </Nav>

        </>
    );
}

export default Navbar;
