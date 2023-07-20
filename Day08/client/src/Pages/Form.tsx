import React from 'react'
import Contact from '../Components/Contact';
import Menu from '../Components/Menu';
import { Container, Heading } from "@chakra-ui/react";

const Form = () => {
  return (
    <>
    <Menu/>
    <Container mt={'50px'} centerContent>
        <Heading color={'green.500'}>CONTACT FORM</Heading>
      <Contact/>
    </Container>
    </>
  )
}

export default Form