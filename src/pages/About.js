import '../App.css'
import styled from 'styled-components'
import HeaderText from '../components/atoms/HeaderText'
import profileImage from '../images/profilePicBlackBkgrnd.jpeg'
import Resume from '../images/Brad_Davis_Resume_2021.pdf'
import DownloadButton from '../components/atoms/DownloadButton'

const About = () => {
    return (
        <div className="App">
            <header className="App-header">
                <HeaderText>
                    About Me
                </HeaderText>
                <Image src={profileImage} alt="Personal Image" />
                <DownloadButton src={Resume}>Download Resume</DownloadButton>
            </header>
        </div>
    )
}

const Image = styled.img`
    height: 200px;
    margin-bottom: 20px;
    border-radius: 20px;
`


export default About
