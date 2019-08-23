import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '../components/Button'

const Container = styled.div`
    height: 60vh;
    max-width: 60%;
    height: 60vh;
    overflow: auto;
    margin: 0 auto;
    @media(max-width: 650px) {
      max-width: 80%;
   }
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
   font-size: 18px;
   color: #5a5a5a;
   @media(max-width: 650px) {
      font-size: 14px;
      }
`


const Privacy = () => (
  <Layout size={14}>
      <Container>
    <SEO title="FAQ" />
    <Title>Frequently asked questions</Title>
  
    <SubTitle>Hoop’s mission is to bring customers peace of mind.</SubTitle>
    <Text> To do that we aim to build trust across the
        entire customer service ecosystem with <b>empathy</b> towards your issue, <b>transparency </b>in our process, 
        and<b> security</b> of your data.</Text>
    <SubTitle>What does hoop do?</SubTitle>
     <Text>
     Hoop resolves your customer service issues for you saving you time, money, and energy. We contact your cable, mobile, or internet service provider on your behalf and find the best
     outcome for you, whether that’s better service, lower pricing, or clear answers to the issue you want fixed. You benefit from our expertise navigating through customer service processes,
     customer service agents benefit from being treated with kindness and patience, and companies benefit from having happy customers.
     Everybody wins.
     </Text>
     <SubTitle>What types of issues can hoop resolve?</SubTitle>
     <Text>
        Hoop can handle any type of customer service issue that does not require a physical in-store visit. This includes bill negotiation, claiming compensation for service outages, selecting and
        scheduling service installations, service upgrades, cancellations, and more. If the solution does
        require an in-store visit we’ll handle as much of the process up to that point and prepare you to
        get the most out of your in-person conversation with store representatives
     </Text>
     <SubTitle>Can hoop resolve issues for other companies not included on the homepage?</SubTitle>
     <Text>
        Hoop primarily focuses on cable, mobile, or internet service providers, but if you have an issue 
        with a different business send us a text message and we’ll see what we can do to remedy the situation
     </Text>
     <SubTitle>Can hoop guarantee results?</SubTitle>
     <Text>
        While we can’t always get a favorable outcome we will do our best to find alternative solutions to your
        issues so you’re not faced with “Sorry ma’am, there’s nothing we can do.”
     </Text>
     <SubTitle>How much does hoop cost ?</SubTitle>
     <Text>
        Hoop is a completely free service as we learn how to resolve issues more efficiently. However, if
        you’re happy with our efforts and want to see us help more people we accepts tips (suggested $5-$10)
     </Text>
     <SubTitle>Is hoop secure?</SubTitle>
     <Text>
        Yes. Hoop uses 256-bit SSL encryption on our website and encrypted databases.
        We use CloakMy, a non-profit message encryption tool, to facilitate the secure transfer of your key
        account information which then automatically gets erased. For more information on CloakMy’s encryption, please visit their Privacy Policy
        <a href="https://cloakmy.org/privacy"> here</a>
     </Text>
     <SubTitle>What does hoop do with my data?</SubTitle>
     <Text>
        Hoop only utilizes your data to resolve your customer service issue. We will share the necessary
        information with the specific company you have an issue with in order to represent your interests during the customer service process. We do not sell any of your data to third parties.
        For more details please refer to our Privacy Policy <a href="https://hoopsupport.com/privacy"> here</a>.
     </Text>
     <SubTitle>How do I get in contact with hoop?</SubTitle>
     <Text>
        If you have any questions or comments you can send us a text at 415-212-9862.
     </Text>
     <SubTitle>Why the name hoop?</SubTitle>
     <Text>
        We want to jump through all the customer service hoops so you don’t have to.
     </Text>
  
     </Container>
      <Button />
  </Layout>
)

export default Privacy
