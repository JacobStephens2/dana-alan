import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const FosteringOurFuture = ({ data }) => {
  return (
    <div>
      <Header pageTitle="Fostering Our Future" />
      <Container className="top-space">
        <Row>
          <Col md={10} lg={7} xl={6}>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const query = graphql`
  query {
    mdx(slug: {eq: "fostering-our-future"}) {
      body
    }
  }
`

export default FosteringOurFuture
