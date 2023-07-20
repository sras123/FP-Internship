import React from 'react'
import { Box, Text, Grid, Spacer, Flex, Container, GridItem, Image } from "@chakra-ui/react";

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
            <Grid templateColumns='repeat(4, 1fr)' gap={6} mt={'30px'}  p={'20px'}>
                <GridItem >
                    <Box>
                    <Image src='https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </Box>
                </GridItem>
                <GridItem w='100%' h='200px'>
                <Box >
                    <Image src='https://images.pexels.com/photos/7845123/pexels-photo-7845123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </Box>
                </GridItem>
                <GridItem w='100%' h='200px'>
                <Box>
                    <Image src='https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </Box>
                </GridItem>
                <GridItem w='100%' h='200px'>
                <Box>
                    <Image src='https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </Box>
                </GridItem>
            </Grid>
            <Flex mt={'10px'}>
                <Spacer />
                <Text>Fruits</Text>
                <Spacer />
                <Text>Vegetables</Text>
                <Spacer />
                <Text>Dairy Products</Text>
                <Spacer />
                <Text>Spices</Text>
                <Spacer />
            </Flex>
        </>
    )
}

export default Categories