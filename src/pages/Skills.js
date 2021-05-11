import React, { useState } from 'react'
import styled from 'styled-components'
import skills from '../constants/skills'
import HeaderText from '../components/atoms/HeaderText'
import profileImage from '../images/profilePicBlackBkgrnd.jpeg'

const mySkills = [
    {
        name: 'Node.js'
    }
]

const Skills = () => {
    const [currentSkill, setCurrentSkill] = useState(undefined)

    const showSkills = () =>
        skills.map(skill => (
            <SkillCard
                key={skill.name}
                onMouseEnter={() => setCurrentSkill(skill)}
                onMouseLeave={() => setCurrentSkill(undefined)}
            >
                <Icon src={skill.icon} alt={skill.name} />
                {currentSkill === skill.name && (
                    <>
                        <SkillName>{skill.name}</SkillName>
                    </>
                )}
            </SkillCard>
        ))

    return (
        <div className="App">
            <header className="App-header">
                <HeaderText>My Skills</HeaderText>
                <SkillsDiv>{showSkills()}</SkillsDiv>
                {currentSkill && (
                    <SkillCard>
                        <SkillName>{currentSkill.name}</SkillName>
                    </SkillCard>
                )}
            </header>
        </div>
    )
}

const SkillsDiv = styled.div`
    display: inline-flex;
`

const SkillCard = styled.div`
    background-color: rgb(0, 0, 0, 0.7);
    min-width: 55px;
    min-height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    height: fit-content;
    border-radius: 20px;
    cursor: pointer;
    opacity: 0.7;
    :hover {
        opacity: 1;
    }
`

const SkillName = styled.p`
    padding: 5px 0;
    margin: 0;
    font-weight: bolder;
    font-size: 20px;
`

const Icon = styled.img`
    max-width: 50px;
    max-height: 50px;
`

export default Skills
