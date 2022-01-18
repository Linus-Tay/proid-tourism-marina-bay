import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarButtonWrap, SidebarButtonLink } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                        <SidebarLink to="services" onClick={toggle}>Plan</SidebarLink>
                        <SidebarLink to="summary" onClick={toggle}>Summary</SidebarLink>
                        <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                    </SidebarMenu>
                    <SidebarButtonWrap>
                        <SidebarButtonLink onClick={toggle}>Sign In</SidebarButtonLink>
                    </SidebarButtonWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
