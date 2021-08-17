import React from "react"
import Header from '../components/header'
import Container from 'react-bootstrap/Container'

const NotFound = () => {
  return (
    <div>
      <Header pageTitle="Home" />
      <Container className="top-space">
        <h1>Page not found</h1>
        <p>Oops! The page you are looking for has been removed or relocated.</p>
      </Container>
    </div>
  )
}

export default NotFound