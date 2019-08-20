import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  font-family: Biryani, sans-serif;
`

export const Footer = styled.footer`
  bottom: 10px;
  font-size: 13px;
  color: black;
  text-align: center;
  a {
    text-decoration: none;
    font-size: 13px;
    color: black;
  }
`

export const BodyWrapper = styled.div`
  margin: 0 auto;
  min-height: 74vh;
  padding: 0px 1.0875rem;
  ${props => (props.size && `font-size: ${props.size}px`)};
`

export const ImgWrapper = styled.div`
  position: absolute; 
  bottom: -5px;
  z-index: -1;
`

export const Img = styled.img`
  margin: 0
  bottom: -10px;
  position: relative;
`