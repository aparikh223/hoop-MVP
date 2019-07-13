import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"


const COMPANIES = [
  'AT&T',
  'Comcast'
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

  const onSubmit = () => {
    console.log('company Select', companySelect.current.value)
    console.log('phone Input', phoneInput.current.value)
    console.log('whatcha wanna do?')

    // Call your API here (lambda function)

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
