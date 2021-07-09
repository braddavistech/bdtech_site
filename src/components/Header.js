import React, { useState } from 'react'
import HeaderLink from './atoms/HeaderLink'
import styled from 'styled-components'
import { MdMenu, MdClose } from 'react-icons/md'


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
          <HeaderLink to="/resume" text="Resume" />
          <Close onClick={closeMenu} />
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
