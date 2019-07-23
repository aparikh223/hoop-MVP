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
  max-width: 320px;
  margin: 0 auto;
`

const HeroText = styled.h2`
  color: rgb(82, 113, 255);
  text-align: center;
`

const CompanySelect = styled.select`
  background: white;
  border: 1px solid #aaa;
  width: 50%;
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
  background: rgb(82, 113, 255);
  color: white;
  text-transform: uppercase;
  padding: 5px 0;
  width: 100%;
  border-radius: 25px;
  border: 0 none;
  
  :hover {
    cursor: pointer;
    background: darkblue;
  }
`

const SubText = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  color: #555;
`


const RequestForm = () => {
  const companySelect = React.createRef()
  const phoneInput = React.createRef()

  const onSubmit = async () => {
    console.log('company Select', companySelect.current.value)
    console.log('phone Input', phoneInput.current.value)
    console.log('whatcha wanna do?')

    const resp = await fetch('/.netlify/functions/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: phoneInput.current.value,
        message: `We'll gladly help you with your ${companySelect.current.value} issue. What can we do for you?`
      })
    })

    console.log('response', resp)
  }

  return (
    <>
      <p>Which company do you need help with?</p>
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
                  placeholder={'Your phone number'}
                  ref={phoneInput}
      />
      <br />
      <SubmitButton onClick={onSubmit}>
        Start Resolving
      </SubmitButton>
      <SubText>
        We'll send you a text to get started.
      </SubText>
    </>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <HeroText>Customer service issues resolved for you.</HeroText>
      <RequestForm/>
    </Container>
  </Layout>
)

export default IndexPage
