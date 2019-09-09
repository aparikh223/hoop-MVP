import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {Wrapper, Logo, LogoWrapper, MenuWrapper, MenuItem} from './styles'


export const activeStyle = {
  color:"rgb(84, 84, 84)"
}

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
        <MenuItem to="/faq"  activeClassName="active"  activeStyle={activeStyle} >FAQ</MenuItem>
        <MenuItem to="/privacy" activeClassName="active"  activeStyle={activeStyle} >Privacy</MenuItem>
        <MenuItem to="/donate" activeClassName="active"  activeStyle={activeStyle} >Donate</MenuItem>
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
