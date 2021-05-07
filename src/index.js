import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './Routes'
import Layout from './Layout'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <React.StrictMode>
        <Layout>
            <Header />
            <Routes />
            <Footer />
        </Layout>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
