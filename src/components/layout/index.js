/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import background from '../../images/background.jpg'
import Header from "../header"
import "./layout.css"

import {Footer, BodyWrapper, Container, ImgWrapper, Img} from './styles'


const Layout = ({ children, size }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <BodyWrapper size={size}>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Hoop Support
          {` `}
          <Link to="/terms/">Terms of Service</Link> 
          {` `}
          &
          {` `}
          <Link to="/privacy/">Privacy Policy</Link>
        </Footer>
      </BodyWrapper>
      <ImgWrapper><Img src={background}/></ImgWrapper>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number
}

export default Layout
