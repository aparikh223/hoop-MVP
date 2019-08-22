import React, {useState} from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import cash from '../images/cash.jpg'
import venmo from '../images/venmo.png'
import paypal from '../images/paypal.png'
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


const Donate = () => {
const [isChecked, handleCheck] = useState(false);
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
            <input id="fieldFirst" type="radio" name="field" value="$5"></input>
            <label htmlFor="fieldFirst" onClick={() => handleCheck(false)}>$5</label>
          </Field>
          <Field>
            <input id="fieldSecond" type="radio" name="field" value="$10"></input>
            <label htmlFor="fieldSecond" onClick={() => handleCheck(false)}>$10</label>
          </Field>
         <Custom>
            <input id="custom" type="radio" name="field" value="$"></input>
            <label htmlFor="custom" onClick={() => handleCheck(!isChecked)} >$_____</label>
            {isChecked && (
                <input autoFocus={true} id="fieldThird" className="custom-amount" name="custom" placeholder="$"></input>
              )
            }
        </Custom>
        </form>
      </AmountWrapper>
      <OptionsWrapper>
        <Text>Payment Options:</Text>
        <ImageContainer>
          <ImageWrapper>
            <img src={cash}/>
          </ImageWrapper>
          <Label>SQUARE CASH</Label>
        </ImageContainer>
        <LogoWrapper>
            <img src={venmo} style={{paddingTop: '40px'}}/>
        </LogoWrapper>
        <LogoWrapper>
            <img src={paypal}/>
        </LogoWrapper>
        

      </OptionsWrapper>
    </Container>
    
  {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)
}

export default Donate