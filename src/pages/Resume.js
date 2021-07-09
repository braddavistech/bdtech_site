import '../App.css'
import styled from 'styled-components'
import ResumePDF from '../images/Brad_Davis_Resume_2021.pdf'

const Resume = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ResumeWindow src={ResumePDF} />
      </header>
    </div>
  )
}

const ResumeWindow = styled.iframe`
  height: 90vh;
  width: 100vw;
  margin-top: 6vh;
  position: relative;
`

export default Resume
