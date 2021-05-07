import React, { useEffect } from 'react'
import styled from 'styled-components'
import image from '../../images/PikesPeak.png'

const BackgroundImage = () => (
    <Background />
)

const Background = styled.div`
    position: fixed;
    background-image: url(${image});
    min-height: 100vh;
    min-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export default BackgroundImage