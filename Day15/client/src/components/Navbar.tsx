import React from "react";
import styled from "@emotion/styled";
import { HStack, Text, Flex, Heading, Spacer, Avatar } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const StyledHstackWrapper = styled.div`
  alignitems: "center";
  padding: 30px;
`;

const stylesFlex = {
  align: "center",
  gap: "40px",
};
// const newStyles = css(a);

// const anotherNewStyle = css({ ...a, border: "1px solid blue" });
const Navbar = () => {
  return (
    <>
      <StyledHstackWrapper>
        <HStack>
          {/* <HStack alignItems={"center"} as="nav" p={"30px"}> */}
          <Heading as="h1">Daily Mart</Heading>
          <Spacer />

          <Flex css={stylesFlex}>
            <Text>
              <Link to="/">Home</Link>
            </Text>
            <Text>
              <Link to="./categories">Categories</Link>
            </Text>
            <Text>
              <Link to="./aboutus">About Us</Link>
            </Text>
            <Text>
              <Link to="/contact">Contact</Link>
            </Text>
            <Text>
              <Link to="/bestproducts">BestProducts</Link>
            </Text>

            <Avatar
              name="Rihanna Parker"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />

            <Menu>
              <MenuButton>
                <HamburgerIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Categories</MenuItem>
                <MenuItem>Offers</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>Best Products</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </StyledHstackWrapper>
    </>
  );
};

export default Navbar;
