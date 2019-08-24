import React, {useState} from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Autocomplete from 'react-autocomplete'

import Layout from "../components/layout"
import SEO from "../components/seo"


const COMPANIES = [
  { label: 'AT&T' },
  { label: 'Boost Mobile' },
  { label: 'Bright House' },
  { label: 'CenturyLink' },
  { label: 'Charter Communications' },
  { label: 'Comcast' },
  { label: 'Cox' },
  { label: 'Cricket Wireless' },
  { label: 'DIRECTV' },
  { label: 'Dish Network' },
  { label: 'Frontier' },
  { label: 'Mediacom' },
  { label: 'Optimum' },
  { label: 'RCN' },
  { label: 'Spectrum' },
  { label: 'Sprint' },
  { label: 'T-Mobile' },
  { label: 'Time Warner' },
  { label: 'Verizon' },
  { label: 'Xfinity' },
  { label: 'Other' }
]

const Container = styled.div`
  max-width: 580px;
  margin: 0 auto;
  height: 72vh;
  @media(max-width: 650px) {
    margin-bottom: 40px;
  }
`

const HeroText = styled.h2`
  color: rgb(82, 113, 255);
  text-align: center;
  text-shadow: 0px 1px 2px rgba(0,0,0,0.5);
  font-weight: 700
  font-size: 40px;
  margin-bottom: 3rem;
`

const PhoneInput = styled.input`
  width: 100%;
  border: 4px solid #d9d9d9;
  border-radius: 8px;
  padding: 7px 10px 5px;
  font-size: 14px;
  margin: 10px auto 20px;
  color: #a6a6a6;
  
`

const SubmitButton = styled.button`
  background-image: linear-gradient(to right, rgb(57, 178, 255), rgb(82, 113, 255));
  color: white;
  text-transform: uppercase;
  padding: 10px 0 5px;
  width: 100%;
  border-radius: 20px;
  border:2px solid white;
  font-weight: bold
  
  :hover {
    cursor: pointer;
    background:transparent;
    border-radius: 20px;
    border:2px solid rgb(82, 113, 255);ackground: darkblue;
    color:rgb(82, 113, 255);
  }
`

const SubText = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 10px;
  color: #555;
  opacity: 0.8;
`

const FormTitle = styled.p`
   color: #545454;
   text-align: center;
   font-size: 25px
`

const FormWrapper = styled.div`
   max-width: 420px;
   margin: 0 auto;
`

const AutocompliteItem = styled.div`
    background: ${props => (props.isHighlighted ? 'lightgray' : 'white')};
    padding: 5px;
    font-size: 14px;
    color: #a6a6a6;
`


const RequestForm = () => {
  const companySelect = React.createRef()
  const phoneInput = React.createRef()

  const [selectedCountry, setCountry] = useState('Company');
  const onSubmit = async () => {
    const resp = await fetch('/.netlify/functions/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: phoneInput.current.value,
        message: `We're here to help you with your ${companySelect.current.props.value} issue. What problem are you currently experiencing? The more detail the better.`
      })
    })

    console.log('response', resp)
  }

  return (
    <>
      <FormTitle>What company can we help you with?</FormTitle>
      <FormWrapper>
        <Autocomplete
          getItemValue={(item) => item.label}
          ref={companySelect}
          items={COMPANIES}
          renderItem={(item, isHighlighted) =>
            <AutocompliteItem isHighlighted={isHighlighted}>
              {item.label}
            </AutocompliteItem>
          }
          inputProps={{
            style: {
              background: 'white',
              width: '100%',
              margin: '0 auto',
              border: '4px solid #d9d9d9',
              borderRadius: '8px',
              padding: '7px 10px 5px',
              fontSize: '14px',
              color: '#a6a6a6',
            }
          }}
          wrapperStyle={{
            width: '100%',
          }}
          menuStyle={{
            zIndex: 20,
            background: 'white',
            height: '140px',
            overflow: 'auto',
            position: 'absolute'
          }}
          value={selectedCountry}
          onSelect={(val) => setCountry(val)}
        />
        <PhoneInput type={'text'}
          placeholder={"Phone Number We'll send you a text to start the process!"}
          ref={phoneInput}
        />

        <SubmitButton onClick={onSubmit}>
          Start Resolving
        </SubmitButton>
        <SubText>
          By submitting your issue you agree to our {` `}  
          <Link to="/terms/" style={{color: '#3a368f'}}>Terms of Service</Link> {` `} & {` `}
          <Link to="/privacy/" style={{color: '#3a368f'}}>Privacy Policy</Link>
        </SubText>
      </FormWrapper>
    </>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <HeroText>Your customer service issues resolved.</HeroText>
      <RequestForm />
    </Container>
  </Layout>
)

export default IndexPage
