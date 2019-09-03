import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonContainer = styled.div`
    width: 40%;
    margin: 20px auto 0;
    background-image: linear-gradient(to right, rgb(57, 178, 255), rgb(82, 113, 255));
    color: white;
    text-transform: uppercase;
    padding: 25px 0 5px;
    height: 70px;
    border-radius: 25px;
    border:2px solid white;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    :hover {
        cursor: pointer;
        background:transparent;
        border-radius: 20px;
        border:2px solid rgb(82, 113, 255);ackground: darkblue;
        color:rgb(82, 113, 255);
    }
    @media(max-width: 650px) {
      width: 60%;
      margin-bottom: 60px;
  }
`
const SubmitButton = styled.button`
  background-image: linear-gradient(to right, rgb(57, 178, 255), rgb(82, 113, 255));
  color: white;
  text-transform: uppercase;
  padding: 10px 0 5px;
  width: 100%;
  height: 70px;
  border-radius: 25px;
  border:2px solid white;
  font-weight: bold;
  :hover {
    cursor: pointer;
    background:transparent;
    border-radius: 20px;
    border:2px solid rgb(82, 113, 255);ackground: darkblue;
    color:rgb(82, 113, 255);
  }
`

const Button = () => {
    const onSubmit =  () => {
        // const resp = await fetch('/.netlify/functions/start', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     to: phoneInput.current.value,
        //     message: `We're here to help you with your ${companySelect.current.props.value} issue. What problem are you currently experiencing? The more detail the better.`
        //   })
        // })
    
        console.log('response')
      }

    return (
        <Link style={{width: '100%'}}to='/'>
            <ButtonContainer>
                GET STARTED
             </ButtonContainer>
        </Link>
    )
}

export default Button