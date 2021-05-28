import React from 'react'
import HalfStar from '../../images/icons/halfStar.png'
import FullStar from '../../images/icons/fullStar.png'
import styled from 'styled-components'
import SkillCardLabel from './SkillCardLabel'

const Stars = ({ stars }) => {
    console.warn(stars.stars)
    const makeStars = () => {
        let starTotal = stars
        const starsDisplay = []
        while (starTotal > 0.5) {
            starsDisplay.push(<FullStarImg src={FullStar} alt="FullStar" />)
            starTotal -= 1
        }
        if (starTotal === 0.5)
            starsDisplay.push(<HalfStarImg src={HalfStar} alt="HalfStar" />)
        console.warn(starsDisplay)
        return starsDisplay
    }
    return (
        <StarDiv>
            <SkillCardLabel>Skill Level: {makeStars()}</SkillCardLabel>

        </StarDiv>
    )
}

const StarDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
`

const FullStarImg = styled.img`
    width: 20px;
    height: 20px;
`

const HalfStarImg = styled.img`
    width: 10px;
    height: 20px;
`

export default Stars
