import React, { useState } from 'react'
import HeaderLink from './atoms/HeaderLink'
import HeaderA from './atoms/HeaderA'
import styled from 'styled-components'
import { MdMenu, MdClose } from 'react-icons/md'
import Resume from '../images/Brad_Davis_Resume_2021.pdf'


const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const closeMenu = () => setShowMenu(false)
    const openMenu = () => setShowMenu(true)

    return (
        <Container >
            <MenuContainer>
                {showMenu ? <>
                    <HeaderLink to="/" text="Home" />
                    <HeaderLink to="/about" text="About Me" />
                    <HeaderLink to="/skills" text="Skills" />
                    <HeaderA href={Resume} target="_blank" text="Resume" />
                    <Close onClick={closeMenu}/>
                </> : <Open onClick={openMenu} />}
                </MenuContainer>
            </Container>
    )
}

const iconStyles = `
    width: 30px;
    height: 30px;
    padding: 0 10px;
    stroke-width: 1px;
    stroke: black;
    fill: black;
    cursor: pointer;
`

const StyledButton = styled.p`
    color: white;
    font-weight: bolder;
    padding: 0;
    margin: 0 20px 0 0;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
`

const Close = styled(MdClose)`
    ${iconStyles}
`

const Open = styled(MdMenu)`
    ${iconStyles}
`

const Container = styled.div`
    color: white;
    font-size: 20px;
    text-align: end;
    font-weight: bolder;
    padding: 10px;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 10;
`

const MenuContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width: fit-content;
    position: fixed;
    right: 0;
    align-items: center;
`

export default Header
