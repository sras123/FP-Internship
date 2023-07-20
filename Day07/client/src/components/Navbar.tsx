import React from 'react'
import { HStack, Text, Flex, Heading, Spacer, Avatar } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <HStack alignItems={"center"} as='nav' p={'30px'} >
            <Heading as='h1'>Daily Mart</Heading>
            <Spacer />

            <Flex align={'center'} gap={'40px'}>
                <Text>
                    <Link to='/'>
                        Home
                    </Link></Text>
                <Text>
                    <Link to='./categories'>
                        Categories
                    </Link>
                </Text>
                <Text>
                <Link to='./aboutus'>
                        About Us
                        </Link>
                </Text>
                <Text>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </Text>
                <Text>
                    <Link to='/bestproducts'>
                        BestProducts
                    </Link>
                </Text>

                <Avatar name='Rihanna Parker' src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />

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
    )
}

export default Navbar;