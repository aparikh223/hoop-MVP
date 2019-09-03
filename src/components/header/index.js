import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {Wrapper, Logo, LogoWrapper, MenuWrapper, MenuItem} from './styles'


const Header = ({ siteTitle }) => (
  <Wrapper>
    <LogoWrapper>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo />
        </Link>
      </h1>
    </LogoWrapper>
    <MenuWrapper >
        <MenuItem to="/faq">FAQ</MenuItem>
        <MenuItem to="/privacy">Privacy</MenuItem>
        <MenuItem to="/donate">Donate</MenuItem>
    </MenuWrapper>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
