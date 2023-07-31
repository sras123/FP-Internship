import React from "react";
import Slogan from "../components/Slogan";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import BestProducts from "../components/BestProducts";
import Contact from "../components/Contact";
import { Box, Text, Container, HStack, Flex } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

const Main = () => {
  return (
    <>
      <Slogan />
      <Categories />
      <AboutUs />
      <BestProducts />
      <Contact />

      <Box bg={"green.100"} h={"300px"} marginBottom={"20px"} mt={"30px"}>
        <Container centerContent>
          <HStack gap={10} mt={"70px"}>
            <AiFillFacebook size={"50px"} />
            <AiFillTwitterCircle size={"50px"} />
            <AiOutlineInstagram size={"50px"} />
          </HStack>
          <Flex mt={"10px"} align={"center"} gap={10}>
            <PhoneIcon mt={"10px"} />
            <Text mt={"10px"}>+977 9385252900</Text>
            <EmailIcon mt={"10px"} />
            <Text mt={"10px"}>+977 9385252900</Text>
            <Box></Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Main;
