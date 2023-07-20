import React from 'react'
import { HStack, Text,  Flex, Heading, Spacer, Button} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
  } from '@chakra-ui/react'

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
                <Text>Contact</Text>
                <Text>BestProducts</Text>
                <Menu>
                    <MenuButton>
                    <HamburgerIcon/>
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