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



const menu = () => {
    return (
        <HStack alignItems={"center"} as='nav' p={'30px'} >
            <Heading as='h1'>Daily Mart</Heading>
            <Spacer />

            <Flex align={'center'} gap={'40px'}>
                <Text>Home</Text>
                <Text>Categories</Text>
                <Text>Offers</Text>
                <Text>About</Text>
                <Text>
                    <Link to='/form'>
                        Contact
                    </Link>
                </Text>
                <Text>
                    <Link to='/'>
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

export default menu