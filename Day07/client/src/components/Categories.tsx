import React from 'react'
import { Text, Grid, Spacer, Flex, Container, GridItem } from "@chakra-ui/react";

const Categories = () => {
    return (
        <>
            <Container centerContent mt={'40px'}>

                <Text fontSize={'20px'}>
                    Here's what you need
                </Text>
                <Text as='b' fontSize={'40px'}>
                    Browse Your Categories
                </Text>
            </Container>
            <Grid templateColumns='repeat(4, 1fr)' gap={6} mt={'70px'}>
                <GridItem bg={'pink'} w='100%' h='200px'>
                    Fruits
                </GridItem>
                <GridItem bg={'pink'} w='100%' h='200px'>
                    Vegetables
                </GridItem>
                <GridItem bg={'pink'} w='100%' h='200px'>
                    Dairy Products
                </GridItem>
                <GridItem bg={'pink'} w='100%' h='200px'>
                    Spices
                </GridItem>
            </Grid>
            <Flex >
                <Spacer/>
                <Text>Fruits</Text>
                <Spacer/>
                <Text>Vegetables</Text>
                <Spacer/>
                <Text>Dairy Products</Text>
                <Spacer/>
                <Text>Spices</Text>
                <Spacer/>
            </Flex>
        </>
    )
}

export default Categories