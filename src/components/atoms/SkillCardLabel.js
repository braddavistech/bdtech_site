import styled from 'styled-components'

const SkillCardLabel = props => <Text>{props.children}</Text>

const Text = styled.p`
    color: white;
    font-weight: bolder;
    font-size: 20px;
    margin: 0;
`

export default SkillCardLabel
