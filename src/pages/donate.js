import React from "react"
import styled from "styled-components"
import { PayPalButton } from "react-paypal-button-v2";
import Layout from "../components/layout"
import SEO from "../components/seo"
import cash from '../images/cash.jpg'
import venmo from '../images/venmo.png'

import {
  MobileView,
} from "react-device-detect";

import "./donate.css"

const Container = styled.div`
  height: 72vh;
`
 
const OptionsWrapper = styled.div`
  text-align: center;
  width: 100%; 
`
const PaypalButtonWrapper = styled.div`
  margin: 0 auto;
  width: 300px; 
  border-radius: 6px;
  max-height: 59px;
  height: auto;
  border: 3px solid #ddd;

`

const SqCashButtonWrapper = styled.a`
  margin: 0 auto;
  width: 300px; 
  display: block;
  border: 3px solid #ddd;
  background-color: white;
  margin-top: 20px;
  border-radius: 10px;

`

const VenmoButtonWrapper = styled.a`
  margin: 0 auto;
  width: 300px; 
  display: block;
  border: 3px solid #ddd;
  background-color: white;
  margin-top: 10px;
  border-radius: 10px;
  margin-bottom: 10px;

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
  margin: 0 auto;
  margin-top: 10px;
`
const SquareCash = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`

const Tagline = styled(Text)`
  opacity: 0.6;
  color: black;
  font-size: 16px;
  margin: 20px;
`

const VenmoImage = styled.img`
height: 35px;
padding: 5px;
margin-top: 10px;
margin-bottom: 0px;
`

const SqCashImage = styled.img`
height: 50px;
padding: 5px;
`

class Donate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 0.01,
    };
  }


  render(){

    return (
      <Layout>
        <Container>
          <SEO title="Donate" />
          <Title>Customer support, Supported by You</Title>
          <SubTitle>On a scale of $1 - $10, how did we do?</SubTitle>
              
         <OptionsWrapper>   
         
            <Tagline>Select an option below to donate.</Tagline>


            <MobileView>

              <SqCashButtonWrapper className="btn-payment" href="https://cash.app/$HoopSupport">
                <SquareCash>
                  <ImageWrapper>
                    <SqCashImage src={cash}/>
                  </ImageWrapper>
                  <Label>SQUARE CASH</Label>
                </SquareCash>
              </SqCashButtonWrapper>

              <VenmoButtonWrapper className="btn-payment" href="venmo://home">
                <VenmoImage src={venmo}/>
                <Label>VENMO</Label>
              </VenmoButtonWrapper>

            </MobileView>

            <PaypalButtonWrapper>
              <PayPalButton
                style={{
                  layout: 'horizontal',
                  color:   'white',
                  shape:   'rect',
                  label:   'paypal',  
                  tagline: false,
                  height: 53,   
                }}
        
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
            </PaypalButtonWrapper>
            

            
          </OptionsWrapper>
          
 
        </Container>
        
      </Layout>
    )
  }

}

export default Donate
