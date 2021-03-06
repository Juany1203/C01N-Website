import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap,SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = 'About' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to = 'Services' onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to = 'signin' onClick={toggle}>Sign In</SidebarLink>
                    <SidebarLink to = 'SignUp' onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/Crypto">Crypto</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>

    )
}

// The sidebar router can help to get into the website for crypto
export default Sidebar
