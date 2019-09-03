import React, {useState} from "react"
import styled from "styled-components"
import { PayPalButton } from "react-paypal-button-v2";
import Layout from "../components/layout"
import SEO from "../components/seo"
import cash from '../images/cash.jpg'
import venmo from '../images/venmo.png'
// import paypal from '../images/paypal.png'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import "./donate.css"

const Container = styled.div`
  height: 72vh;
`
const AmountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 75%;
  margin: 50px auto 30px;
  justify-content: space-between;
  @media(max-width: 650px) {
    flex-wrap: wrap;
}
`
const OptionsWrapper = styled(AmountWrapper)`
  width: 85%;
  flex-wrap: wrap;
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
  margin-bottom: 10px;
  @media(max-width: 650px) {
    font-size: 20px;
    }
`
const Text = styled.p`
   font-size: 28px;
   color: black;
   opacity: 0.8;
   margin: 0;
   padding: 0;
   @media(max-width: 650px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`
const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
`
const Label = styled(Text)`
  opacity: 0.6;
  color: black;
  font-weight: 600;
`
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`
const LogoWrapper = styled(ImageWrapper)`
  width: 220px;
  height: 120px;
  cursor: pointer;
`
const Field = styled.div`
  width: 220px;
  border-radius: 50px;
  height: 80px;
  font-size: 30px;
  background-color: #d9d9d9;
  @media(max-width: 650px) {
    margin-bottom: 5px;
  }
`
const Custom = styled(Field)`
  position: relative;
`


class Donate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      isChecked: false,
    };
  }
  setAmount = (value) => {
    this.setState({
      amount: value,
    });
  }

  setCustomAmount = (e) => {
    this.setState({amount: e.target.value});
  } 

  handleClick = () => {
    this.setState({isChecked: true});
  }

  render(){

    return (
      <Layout>
        <Container>
          <SEO title="Donate" />
          <Title>Customer support, Supported by You</Title>
          <SubTitle>On a scale of $1 - $10, how did we do?</SubTitle>
          <AmountWrapper>
            <Text style={{margin:'0', padding:'0', whiteSpace: "nowrap"}}>Tip Amount:</Text>
            <form>
              <Field>
                <input onClick={() => this.setAmount(5)} id="fieldFirst" type="radio" name="field" value="$5"></input>
                <label htmlFor="fieldFirst" >$5</label>
              </Field>
              <Field >
                <input onClick={() => this.setAmount(10)} id="fieldSecond" type="radio" name="field" value="$10"></input>
                <label htmlFor="fieldSecond">$10</label>
              </Field>
            <Custom>
                <input id="custom" type="radio" name="field" onClick={(e) => this.handleClick(e)} ></input>
                <label htmlFor="custom" >$_____</label>
                {this.state.isChecked && (
                    <input onChange={(e)=> this.setCustomAmount(e)} autoFocus={true} id="fieldThird" className="custom-amount" name="custom" placeholder="$"></input>
                  )
                }
            </Custom>
            </form>
            </AmountWrapper>
            
            <AmountWrapper>
              <Text>Payment Options:</Text>    
            </AmountWrapper>
          
                
         <OptionsWrapper>            
  
            <PayPalButton
              amount={this.state.amount}
              onSuccess={(details, data) => {
                alert("Transaction completed by " + details.payer.name.given_name);
      
                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                  method: "post",
                  body: JSON.stringify({
                    orderID: data.orderID
                  })
                });
              }}
            />
            
            <MobileView>
              <ImageContainer>
                <ImageWrapper>
                  <img src={cash}/>
                </ImageWrapper>
                <Label>SQUARE CASH</Label>
              </ImageContainer>
            
              <LogoWrapper>
                  <img src={venmo} style={{paddingTop: '40px'}}/>
              </LogoWrapper>
            </MobileView>
            
          </OptionsWrapper>
          
 
        </Container>
        
      {/* <Link to="/">Go back to the homepage</Link> */}
      </Layout>
    )
  }

}

export default Donate