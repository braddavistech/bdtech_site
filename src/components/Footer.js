import React, { useState } from 'react'
import HeaderLink from './atoms/HeaderLink'
import styled from 'styled-components'
import { MdMenu, MdClose } from 'react-icons/md'


const Footer = () => {
    return (
        <Container >
            <Text>Custom React site built with Node and deployed with Serverless Framework.</Text>
            </Container>
    )
}


const Text = styled.p`
    color: white;
    font-weight: bolder;
    padding: 0;
    margin: 0 20px 0 0;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
`

const Container = styled.div`
    margin: 0;
    padding-bottom: 5px;
    color: white;
    font-size: 16px;
    text-align: center;
    font-weight: bolder;
    width: 100vw;
    position: fixed;
    bottom: 0;
    z-index: 12;
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

export default Footer
