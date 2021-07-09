import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'
import Main from './Main'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import BackgroundImage from './components/atoms/BackgroundImage'

const Routes = () => {
  return (
    <Container>
      <BackgroundImage />
      <AppBody>
        <Switch>
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Redirect path="*" to="/" />
        </Switch>
      </AppBody>
    </Container>
  )
}

const Container = styled.div``

const AppBody = styled.div`
    position: relative;
    z-index: 1;
`

export default Routes
