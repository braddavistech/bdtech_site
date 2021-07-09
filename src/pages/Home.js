import '../App.css'
import styled from 'styled-components'
import HeaderText from '../components/atoms/HeaderText'
import SubheaderText from '../components/atoms/SubheaderText'

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <HeaderText>
                    Hi,
                    <br />
                    I'm Brad.
                    <SubheaderText>
                        I'm rewriting my website so please check back soon.
                    </SubheaderText>
                </HeaderText>
            </header>
        </div>
    )
}

const Image = styled.img`
    height: 200px;
`

const P = styled.p`
    color: black;
    font-weight: bold;
    font-size: 80px;
    font-family: 'Permanent Marker', cursive;
`

export default Home
