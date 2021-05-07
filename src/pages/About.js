import '../App.css'
import styled from 'styled-components'
import HeaderText from '../components/atoms/HeaderText'
import profileImage from '../images/profilePicBlackBkgrnd.jpeg'

const About = () => {
    return (
        <div className="App">
            <header className="App-header">
                <HeaderText>
                    About Me
                </HeaderText>
                {/* <Image src={profileImage} alt="Profile Image"/> */}
            </header>
        </div>
    )
}

const Image = styled.img`
    height: 200px;
`


export default About
