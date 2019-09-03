import styled from "styled-components"
import background from '../../images/background.jpg'

export const Container = styled.div`
  position: relative;
  font-family: Biryani, sans-serif;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`

export const Footer = styled.footer`
  position: absolute;
  bottom: 5px;
  display: flex;
  justify-content: center;
  width: 90%;
  font-size: 13px;
  color: #555;
  opacity: 0.8;
  text-align: center;
  a {
    text-decoration: none;
    font-size: 13px;
    color: black;
  }
`

export const BodyWrapper = styled.div`
  margin: 0 auto;
  min-height: 78vh;
  padding: 0px 1.0875rem;
  ${props => (props.size && `font-size: ${props.size}px`)};
`

export const ImgWrapper = styled.div`
  position: absolute; 
  bottom: -5px;
  z-index: -1;
  width: 100%;
`

export const Img = styled.img`
  margin: 0
  bottom: -14px;
  position: relative;
  width: 100%;
`

export const Social = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 107px;
  height: 35px;
  @media(max-width: 650px) {
    bottom: 45px;
}
`