const { FaNode} = require('react-icons/fa')
const styled = require('styled-components')

const mySkills = [
    {
        name: 'Node.js',
        icon: NodeIcon
    }
]

const iconStyles = `
    width: 30px;
    height: 30px;
    padding: 0 10px;
    stroke-width: 1px;
    stroke: black;
    fill: black;
    cursor: pointer;
`

const NodeIcon = styled(FaNode)`
    ${iconStyles}
`

module.export = mySkills