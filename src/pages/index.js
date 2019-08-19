import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"


const COMPANIES = [
  'AT&T',
  'Boost Mobile',
  'Bright House',
  'CenturyLink',
  'Charter Communications',
  'Comcast',
  'Cox',
  'Cricket Wireless',
  'DIRECTV',
  'Dish Network',
  'Frontier',
  'Mediacom',
  'Optimum',
  'RCN',
  'Spectrum',
  'Sprint',
  'T-Mobile',
  'Time Warner',
  'Verizon',
  'Xfinity'
]

const Container = styled.div`
  max-width: 580px;
  margin: 0 auto;
  height: 70vh;
`

const HeroText = styled.h2`
  color: rgb(82, 113, 255);
  text-align: center;
  text-shadow: 0px 2px 5px rgba(0,0,0,0.5);
  font-size: 30px
`

const CompanySelect = styled.select`
  background: white;
  border: 1px solid #aaa;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`

const PhoneInput = styled.input`
  width: 100%;
  margin: 20px auto;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
`

const SubmitButton = styled.button`
  background-image: linear-gradient(to right, rgb(57, 178, 255), rgb(82, 113, 255));
  color: white;
  text-transform: uppercase;
  padding: 5px 0;
  width: 100%;
  border-radius: 20px;
  border:2px solid white;
  
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
  font-size: 12px;
  color: #555;
`

const FormTitle = styled.p`
   color: #545454;
   text-align: center;
   font-size: 25px
`

const FormWrapper = styled.div`
   max-width: 380px;
   margin: 0 auto;
`

const RequestForm = () => {
  const companySelect = React.createRef()
  const phoneInput = React.createRef()

  const onSubmit = async () => {
    const resp = await fetch('/.netlify/functions/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: phoneInput.current.value,
        message: `We're here to help you with your ${companySelect.current.value} issue. What problem are you currently experiencing? The more detail the better.`
      })
    })

    console.log('response', resp)
  }

  return (
    <>
      <FormTitle>What company can we help you with?</FormTitle>
      <FormWrapper>
        <CompanySelect ref={companySelect}>
          { COMPANIES.map((company) => (
            <option key={company}
                    value={company}
            >
              {company}
            </option>
          )) }
        </CompanySelect>
        <br />
        <PhoneInput type={'text'}
                    placeholder={"Phone Number We'll send you a text to start the process!"}
                    ref={phoneInput}
        />
        <br />
        <SubmitButton onClick={onSubmit}>
          Start Resolving
        </SubmitButton>
        <SubText>
          We'll send you a text to get started.
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
      <RequestForm/>
    </Container>
  </Layout>
)

export default IndexPage
