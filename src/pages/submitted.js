import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"

import check from '../images/check.png'
import "./donate.css"

const Container = styled.div`
  height: 72vh;
`

const Title = styled.h1`
  color: #5272ff;
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  @media(max-width: 650px) {
    font-size: 26px;
    }
`
const SubTitle = styled.h3`
  color: #545454;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  margin: 20px;
  @media(max-width: 650px) {
    font-size: 20px;
    }
`


const SubmitButton = styled.button`
  background-image: linear-gradient(to right, rgb(57, 178, 255), rgb(82, 113, 255));
  color: white;
  text-transform: uppercase;
  padding: 10px 0 5px;
  width: 40%;
  border-radius: 20px;
  border:2px solid white;
  font-weight: bold;
  
  :hover {
    cursor: pointer;
    background:transparent;
    border-radius: 20px;
    border:2px solid rgb(82, 113, 255);
    color:rgb(82, 113, 255);
  }
`

const SubmitIcon = styled.div`
    width: 120px;
    height: 120px;
    margin: 0 auto;
    background: url(${check});
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 20px;
`

class Donate extends React.Component {

  render(){

    return (
      <Layout>
        <Container>
            <Title>Issue Submitted!</Title>
            
            
            <SubmitIcon />

            <SubTitle>We just sent you a text to get process started.</SubTitle>
            
            <div style={{textAlign:'center'}}>
                <Link to="/">
                    <SubmitButton> Home </SubmitButton>
                </Link>     
            </div>  
        
        </Container>
        
      {/* <Link to="/">Go back to the homepage</Link> */}
      </Layout>
    )
  }

}

export default Donate
