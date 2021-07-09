import '../App.css'
import styled from 'styled-components'
import HeaderText from '../components/atoms/HeaderText'
import profileImage from '../images/ProfilePic.png'
import LinkedIn from '../images/icons/linkedIn.png'
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
        <BlackDiv>

        <a href="https://www.linkedin.com/in/braddavistech/" target='_blank'><Icon src={LinkedIn} alt="Linked In" /></a>
        <DownloadButton src={Resume}>Download Resume</DownloadButton>
        </BlackDiv>
      </header>
    </div>
  )
}

const Icon = styled.img`
  height: 40px;
  padding: 5px;
  border-radius: 10px;
`

const Image = styled.img`
  height: 200px;
  margin-bottom: 20px;
`

const BlackDiv = styled.div`
  padding: 40px;
  border-radius: 25px;
  background-color: black;
`


export default About
