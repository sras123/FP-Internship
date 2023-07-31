import React from "react";
import { Box, Text, SimpleGrid, Button, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledGrid = styled.div`
  background-color: #c6f6d5;
  padding: 20px;
  margin-top: 100px;
  height: 500px;
  spacing: 40px;
`;

const StyledText = {
  fontSize: "40px",
  fontWeight: "bold",
  marginTop: "30px",
};

const anotherStyledText = css({
  ...StyledText,
  fontStyle: "italic",
  fontSize: " normal",
});

const StyledButton = styled.div`
  .chakra-button {
    background-color: #228b22;
    height: "90px";
    margin-top: 12px;

    :hover {
      background-color: #355e3b;
    }
  }
`;
const AboutUs = () => {
  return (
    <>
      <StyledGrid>
        <SimpleGrid columns={2}>
          <Box boxSize={"700px"}>
            <Image src="https://images.pexels.com/photos/2252482/pexels-photo-2252482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </Box>
          <Box>
            <Text fontSize={"40px"} as="b" mt="30px">
              About Us
            </Text>
            <Text css={anotherStyledText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              maiores saepe ea accusantium explicabo eum. Ipsum dolorum quaerat
              nostrum sint, maiores, cumque reiciendis suscipit repudiandae
              officia minima fugiat, aliquam consequuntur.
            </Text>
            <StyledButton>
              <Button>Learn More</Button>
            </StyledButton>
          </Box>
        </SimpleGrid>
      </StyledGrid>

      <Box bg={"green.100"} h={"100px"} mt={"50px"}>
        <SimpleGrid columns={3} p={"30px"} spacing="40px" marginLeft={"200px"}>
          <Box>
            <Text> 2100+ </Text>
            <Text> Satisifed Client</Text>
          </Box>
          <Box>
            <Text>50+</Text>
            <Text>Active Participants</Text>
          </Box>
          <Box>
            <Text>50+ </Text>
            <Text>Food Categories</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default AboutUs;
