import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
    height: 60vh;
    max-width: 580px;
    overflow: auto;
    margin: 0 auto;
`

const Title = styled.h1`
  color: #5272ff;
  font-size: 28px;
  text-align: center;
  font-weight: 700;
`

const SubTitle = styled.h4`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`


const Privacy = () => (
  <Layout>
    <Container>
      <SEO title="Privacy" />
      <Title>Privacy</Title>
      <SubTitle>Effective 7/25/19</SubTitle>

      <p>We at Hoop know you care about how your personal information is used and shared, and we take your privacy seriously.           Please read the following to learn more about our Privacy Policy. By using or accessing the Services in any manner,           you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent             that we will collect, use, and share your information in the following ways.</p>
      <p>Remember that your use of Hoop’s Services is at all times subject to the Terms of Service, which incorporates this             Privacy Policy. Any terms we use in this Policy without defining them have the definitions given to them in the Terms         of Service.</p>
      <SubTitle>Privacy Policy Coverage</SubTitle>
      <p>This Privacy Policy covers our treatment of personally identifiable information ("Personal Information") that we               gather when you are accessing or using our Services, but not to the practices of companies we don’t own or control, or         people that we don’t manage. We gather various types of Personal Information from our users, as explained in more             detail below, and we use this Personal Information internally in connection with our Services, including to                   personalize, provide, and improve our services, to allow you to set up a user account and profile, to contact you and         allow other users to contact you, to fulfill your requests for certain products and services, and to analyze how you           use the Services. In certain cases, we may also share some Personal Information with third parties, but only as               described below.</p>

    </Container>
  </Layout>
)

export default Privacy
