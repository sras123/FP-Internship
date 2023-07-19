import React from 'react'
import { HStack, Text,  Flex, Heading, Spacer } from '@chakra-ui/react';

const menu = () => {
    return (
        <Flex alignItems={"center"} as='nav' p={'30px'} >
            <Heading as='h1'>Daily Mart</Heading>
            <Spacer />

            <HStack>
                <Text>Home</Text>
                <Text>Categories</Text>
                <Text>Offers</Text>
                <Text>About</Text>
                <Text>Contact</Text>
                <Text>BestProducts</Text>
            </HStack>
        </Flex>
    )
}

export default menu