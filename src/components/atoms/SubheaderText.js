import styled from 'styled-components'

const SubheaderText = props => <Text>{props.children}</Text>

const Text = styled.p`
    margin: 0;
    color: black;
    font-weight: bold;
    font-size: 45px;
    font-family: 'Permanent Marker', cursive;
`

export default SubheaderText
