import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '../components/Button'

const Container = styled.div`
    height: 60vh;
    width: 60%;
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

const SubTitle = styled.h4`
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 500;
  @media(max-width: 650px) {
    font-size: 20px;
    }
`
const Text = styled.p`
   font-size: 18px;
   color: #5a5a5a;
   letter-spacing: 0.3;
   @media(max-width: 650px) {
    font-size: 14px;
    }
`


const Privacy = () => (
  <Layout>
    <Container>
      <SEO title="Privacy" />
      <Title>Privacy Policy</Title>
      <SubTitle>Effective 7/25/19</SubTitle>

      <Text>We at Hoop know you care about how your personal information is used and shared, and we take your privacy seriously.           Please read the following to learn more about our Privacy Policy. By using or accessing the Services in any manner,           you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent             that we will collect, use, and share your information in the following ways.</Text>
      <Text>Remember that your use of Hoop’s Services is at all times subject to the Terms of Service, which incorporates this             Privacy Policy. Any terms we use in this Policy without defining them have the definitions given to them in the Terms         of Service.</Text>
      <SubTitle>Privacy Policy Coverage</SubTitle>
      <Text>This Privacy Policy covers our treatment of personally identifiable information ("Personal Information") that we               gather when you are accessing or using our Services, but not to the practices of companies we don’t own or control, or         people that we don’t manage. We gather various types of Personal Information from our users, as explained in more             detail below, and we use this Personal Information internally in connection with our Services, including to                   personalize, provide, and improve our services, to allow you to set up a user account and profile, to contact you and         allow other users to contact you, to fulfill your requests for certain products and services, and to analyze how you           use the Services. In certain cases, we may also share some Personal Information with third parties, but only as               described below.</Text>
      <Text>As noted in the Terms of Use, we do not knowingly collect or solicit personal information from anyone under the age of 13. If you are under 13, please do not attempt to register for the Services or send any personal information about yourself to us. If we learn that we have collected personal information from a child under age 13, we will delete that information as quickly as possible. If you believe that a child under 13 may have provided us personal information, please contact us by sending a message to 415-212-9862.</Text>
    <SubTitle>Changes to Privacy Policy</SubTitle>
    <Text>We’re constantly trying to improve our Services, so we may need to change this Privacy Policy from time to time as well, but we will alert you to changes by placing a notice on the Services, by sending you an email, and/or by some other means. Please note that if you’ve opted not to receive legal notice emails from us (or you haven’t provided us with your email address), those legal notices will still govern your use of the Services, and you are still responsible for reading and understanding them. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes.</Text>
    <SubTitle>Collected Information</SubTitle>
    <Text>Information You Provide to Us:</Text>
    <Text>We receive and store any information you knowingly provide to us. For example, through the registration process and/or through your account settings, we may collect Personal Information such as your name, email address, phone number, and third-party account credentials (for example, your log-in credentials for third party sites). If you provide your third-party account credentials to us or otherwise sign in to the Services through a third party site or service, you understand some content and/or information in those accounts (“Third Party Account Information”) may be transmitted into your account with us, and that Third Party Account Information transmitted to our Services is covered by this Privacy Policy. Certain information may be required to register with us or to take advantage of some of our features.</Text>
    <Text>In order to securely receive your information we may use a third party non-profit platform, CloakMy to generate ephemeral, encrypted links that give us one-time access to the data that you share. Examples of information passed through this platform include Third Party Account Information, last four digits of your social security number, and order confirmation numbers. For more information on CloakMy’s encryption and privacy policy please visit https://cloakmy.org/privacy.</Text>
    <Text>We may communicate with you if you’ve provided us the means to do so. For example, if you’ve given us your email address, we may send you promotional email offers on behalf of other businesses, or email you about your use of the Services. Also, we may receive a confirmation when you open an email from us. This confirmation helps us make our communications with you more interesting and improve our services. If you do not want to receive communications from us, please indicate your preference by opting-out. For email communications, you can opt-out using the Unsubscribe link provided in the email. For SMS messages, you can opt-out from your Settings page or by replying “Stop”.</Text>
    <Text>For online payments, we use the payment services of Stripe, Square Cash, and PayPal. We do not process, record or maintain your credit card information. For more information on how payments are handled, or to understand the data security and privacy afforded such information, please refer to the privacy policies for Stripe, Square Cash, and PayPal.</Text>
    <Text>Information Collected Automatically:</Text>
    <Text>Whenever you interact with our Services, we automatically receive and record information on our server logs from your browser or device, which may include your IP address, geolocation data, device identification, “cookie” information, the type of browser and/or device you’re using to access our Services, and the page or feature you requested. “Cookies” are identifiers we transfer to your browser or device that allow us to recognize your browser or device and tell us how and when pages and features in our Services are visited and by how many people. You may be able to change the preferences on your browser or device to prevent or limit your device’s acceptance of cookies, but this may prevent you from taking advantage of some of our features. If you click on a link to a third party website or service, such third party may also transmit cookies to you. Again, this Privacy Policy does not cover the use of cookies by any third parties, and we aren’t responsible for their privacy policies and practices. Please be aware that cookies placed by third parties may continue to track your activities online even after you have left our Services, and those third parties may not honor “Do Not Track” requests you have set using your browser or device.</Text>
    <Text>We may use this data to customize content for you that we think you might like, based on your usage patterns. We may also use it to improve the Services - for example, this data can tell us how often users use a particular feature of the Services, and we can use that knowledge to make the Services interesting to as many users as possible.</Text>
    <Text>Sharing Personal Information</Text>
    <Text>We do not rent or sell your Personal Information in personally identifiable form to anyone, except as expressly provided below. We may share your Personal Information with third parties as described in this below:</Text>
    <Text>Information that’s been de-identified: We may de-identify your Personal Information so that you are not identified as an individual, and provide that information to our partners. We may also provide aggregate usage information to our partners (or allow partners to collect that information from you), who may use such information to understand how often and in what ways people use our Services, so that they, too, can provide you with an optimal online experience. However, we never disclose aggregate usage or de-identified information to a partner (or allow a partner to collect such information) in a manner that would identify you as an individual.</Text>
    <Text>Affiliated Businesses: In certain situations, businesses or third party websites we’re affiliated with may sell or provide products or services to you through or in connection with the Services (either alone or jointly with us). You can recognize when an affiliated business is associated with such a transaction or service, and we will share your Personal Information with that affiliated business only to the extent that it is related to such transaction or service. Some such services may include the ability for you to automatically transmit Third Party Account Information to your Services profile or to automatically transmit information in your Services profile to your third party account, for example, by pre-filling a customer service issue form. We have no control over the policies and practices of third party websites or businesses as to privacy or anything else, so if you choose to take part in any transaction or service relating to an affiliated website or business, please review all such business’ or websites’ policies.</Text>
    <Text>Our Agents: We employ other companies and people to perform tasks on our behalf and need to share your information with them to provide products or services to you; for example, we may use a payment processing company to receive and process your credit card transactions for us in the future. Unless we tell you differently, our agents do not have any right to use the Personal Information we share with them beyond what is necessary to assist us.</Text>
    <Text>Business Transfers: We may choose to buy or sell assets, and may share and/or transfer customer information in connection with the evaluation of and entry into such transactions. Also, if we (or our assets) are acquired, or if we go out of business, enter bankruptcy, or go through some other change of control, Personal Information could be one of the assets transferred to or acquired by a third party.</Text>
    <Text>Protection of Company and Others: We reserve the right to access, read, preserve, and disclose any information that we reasonably believe is necessary to comply with law or court order; enforce or apply our Terms of Use and other agreements; or protect the rights, property, or safety of Company, our employees, our users, or others.</Text>
    <SubTitle>Information Security</SubTitle>
    <Text>Your account is protected by a password for your privacy and security. If you access your account via a third party site or service, you may have additional or different sign-on protections via that third party site or service. You must prevent unauthorized access to your account and Personal Information by selecting and protecting your password and/or other sign-on mechanism appropriately and limiting access to your computer or device and browser by signing off after you have finished accessing your account.</Text>
    <Text>We endeavor to protect the privacy of your account and other Personal Information we hold in our records, but unfortunately, we cannot guarantee complete security. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of user information at any time.</Text>
    <SubTitle>Information Access</SubTitle>
    <Text>By reaching out to privacy@hoopsupport.com you can access and delete the following information:</Text>
    <ul>
      <li>name and password</li>
      <li>email address</li>
      <li>phone number</li>
      <li>location</li>
      <li>user profile information</li>
    </ul>
    <Text>The information you can view, update, and delete may change as the Services change. If you have any questions about viewing or updating information we have on file about you, please contact us at privacy@hoopsupport.com.</Text>
    <Text>Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to contact us to prevent disclosure of Personal Information to third parties for such third parties’ direct marketing purposes; in order to submit such a request, please send us a message at 415-212-9862.</Text>
    <SubTitle>User Choice</SubTitle>
    <Text>You can always opt not to disclose information to us, but keep in mind some information may be needed to register with us or to take advantage of some of our features.</Text>
    <Text>You may be able to add, update, or delete information as explained above. When you update information, however, we may maintain a copy of the unrevised information in our records. You may request deletion of your account by going to your Settings page or emailing us at privacy@hoopsupport.com. Some information may remain in our records after your deletion of such information from your account. We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally.</Text>
    <SubTitle>Feedback</SubTitle>
    <Text>If you have any questions or concerns regarding our privacy policies, please send us a detailed message to 415-212-9862, and we will try to address your concerns.</Text>
    </Container>
    <Button />
  </Layout>
)

export default Privacy
