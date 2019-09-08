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

import {Footer, BodyWrapper, Container, ImgWrapper, Img, Social} from './styles'


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
          <div>
          © {new Date().getFullYear()}, Hoop Support
          {` `}
          <Link to="/terms/" style={{color: '#3a368f'}}>Terms of Service</Link> 
          {` `}
          &
          {` `}
          <Link to="/privacy/" style={{color: '#3a368f'}}>Privacy Policy</Link>
          </div>
        </Footer>
        <Social>
          <a className="social" target = '_blank' id="twit" href="https://twitter.com/GetHooped"></a>
          <a className="social" target = '_blank' id="fb" href="https://www.facebook.com/GetHooped/"></a>
          <a className="social" target = '_blank' id="inst" href="https://www.instagram.com/hoop_support/"></a>
        </Social>
      </BodyWrapper>
      {/* <ImgWrapper><Img src={background}/></ImgWrapper> */}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number
}

export default Layout
