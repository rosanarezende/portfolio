import React, { useState } from "react"

import { AppBarStyled, Logo, DivGrow, SectionDesktop, SectionMobile, LinksContainer, LinkStyled } from "./styles"
import { Toolbar, IconButton, Menu } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';

function Appbar() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    let links = <LinksContainer>
        <LinkStyled href="#about">quem sou</LinkStyled>
        <LinkStyled href="#knowledge">conhecimentos</LinkStyled>
        <LinkStyled href="#education">educação</LinkStyled>
        <LinkStyled href="#projects">projetos</LinkStyled>
        <LinkStyled href="#hireme">contato</LinkStyled>
    </LinksContainer>

    const handleMobileMenuOpen = (event) => { setMobileMoreAnchorEl(event.currentTarget) }

    const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null) }

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu =
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {links}
        </Menu>

    return (
        <AppBarStyled color="transparent">
            <Toolbar>
                <LinkStyled href="#home"><Logo
                    src="https://user-images.githubusercontent.com/45580434/86594186-f53cd800-bf6c-11ea-9868-bdb10d9083f6.png"
                    alt="logo"
                /></LinkStyled>
                <DivGrow />
                <SectionDesktop>{links}</SectionDesktop>
                <SectionMobile>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="primary"
                    >
                        <MenuIcon color="secondary" />
                    </IconButton>
                </SectionMobile>
            </Toolbar>
            {renderMobileMenu}
        </AppBarStyled>
    )
}

export default Appbar