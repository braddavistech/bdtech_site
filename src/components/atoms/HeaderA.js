import React from 'react'
import styled from 'styled-components'

const Header = ({ href, text, children }) => {
  return <StyledLink href={href} target='_blank'>{text || children}</StyledLink>
}

const StyledLink = styled.a`
    color: black;
    font-weight: bolder;
    margin: 0 10px;
    text-decoration: none;
    border-radius: 5px;

`

export default Header