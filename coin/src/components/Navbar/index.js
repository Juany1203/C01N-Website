import React from 'react';
import {Nav,NAvbarContainer, NavbarLogo} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NAvbarContainer>
                    <NavbarLogo to='/'>C01N</NavbarLogo>
                </NAvbarContainer>
            </Nav>

        </>
    );
}

export default Navbar;
