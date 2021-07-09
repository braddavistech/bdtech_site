import styled from 'styled-components'

const HeaderText = props => <Text>{props.children}</Text>

const Text = styled.p`
    margin: 0;
    margin-top: 15vh;
    color: black;
    font-weight: bold;
    font-size: 80px;
    font-family: 'Permanent Marker', cursive;
`

export default HeaderText
