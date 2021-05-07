import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = ({ to, text }) => {
    return <StyledLink to={to}>{text}</StyledLink>
}

const StyledLink = styled(Link)`
    color: black;
    font-weight: bolder;
    margin: 0 10px;
    text-decoration: none;
    border-radius: 5px;

`

export default Header