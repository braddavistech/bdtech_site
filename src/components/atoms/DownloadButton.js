import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

const DownloadButton = ({ src, text, children }) => {
  return <ButtonDiv>
    <StyledButton href={src} download><DownloadIcon icon={faCloudDownloadAlt} />{text || children}</StyledButton>
    </ButtonDiv>
}

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledButton= styled.a`
    color: black;
    background-color: black;
    color: white;
    font-weight: bolder;
    margin: 0 10px;
    text-decoration: none;
    border-radius: 10px;
    padding: 5px;
`

const DownloadIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`

export default DownloadButton