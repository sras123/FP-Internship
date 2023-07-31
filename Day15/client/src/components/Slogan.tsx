import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Heading,
  Flex,
  Button,
  Image,
  chakra,
} from "@chakra-ui/react";
import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";

const StyledWrapper = chakra(SimpleGrid, {
  baseStyle: {
    padding: "20px",
    margin: "50px",
    // border: "2px solid red",
  },
});
const StyledButton = styled.div`
  .chakra-button {
    background-color: black;
    height: "90px";

    :hover {
      background-color: #a0a0a0;
    }
  }
`;

const StyledBox = styled.div`
  background-color: #c6f6d5;
  height: 100px;
  margin-top: 20px;
`;

const Slogan = () => {
  return (
    <StyledWrapper>
      <SimpleGrid columns={2}>
        <Box
          css={css`
            height: "290px";
            padding: "10px";
          `}
        >
          <Text as="b">Choose fresh and organic products</Text>
          <Heading p={"10px"}>
            SIMPLE, FAST AND CONVENIENT GROCERY STORE
          </Heading>
          <SimpleGrid
            columns={2}
            padding={"20px"}
            margin={"50px"}
            gridGap={"40px"}
          >
            <StyledButton>
              <Button>
                <Text color={"white"} align={"center"} mt={"2px"}>
                  Google Play
                </Text>
              </Button>
            </StyledButton>
            <StyledButton>
              <Button>
                <Text color={"white"} align={"center"} mt={"2px"}>
                  App Store
                </Text>
              </Button>
            </StyledButton>
          </SimpleGrid>
        </Box>
        <Box>
          <Image src="https://images.pexels.com/photos/9899253/pexels-photo-9899253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </Box>
      </SimpleGrid>
      <StyledBox>
        <Box>
          <Flex justifyContent={"space-between"} p={"40px"}>
            <Box>
              <Text>Free Delivery</Text>
            </Box>
            <Box mt={"-10px"}>
              <Text> Product from </Text>
              <Text> Organic Farm</Text>
            </Box>
            <Box mt={"-10px"}>
              <Text>No Minumum</Text>
              <Text>Order</Text>
            </Box>
            <Box mt={"-10px"}>
              <Text>Live Order </Text>
              <Text> Tracking</Text>
            </Box>
          </Flex>
        </Box>
      </StyledBox>
    </StyledWrapper>
  );
};

export default Slogan;
