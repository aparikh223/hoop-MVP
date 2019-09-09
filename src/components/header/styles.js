import styled from 'styled-components'
import { Link } from "gatsby"
import logo from '../../images/logo.png'

export const Wrapper = styled.header`
    background: white;
    margin-bottom: 2rem;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.0875rem 0;
    @media(max-width: 650px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const LogoWrapper = styled.div`
@media(max-width: 650px) {
    flex-wrap: wrap;
    justify-content: center;
}
`

export const Logo = styled.div`
  width: 250px;
  height: 84px;
  margin: 0 auto;
  background: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  @media(max-width: 650px) {
    width: 150px;
    height: 64px;
}
`
export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    @media(max-width: 650px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const MenuItem = styled(Link)`
    margin: 0 20px;
    color: #a6a6a6;
    font-size: 24px;
    font-weight: 800;
    @media(max-width: 650px) {
        font-size: 18px;
    }

    :hover {
        cursor: pointer;
        color:rgb(84, 84, 84)
    }
`
