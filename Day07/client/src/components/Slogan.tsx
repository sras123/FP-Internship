import React from 'react'
import { Box, Text, SimpleGrid, Heading, Flex } from "@chakra-ui/react";

const Slogan = () => {
    return (
        <>
            <SimpleGrid columns={2} padding={'20px'} margin={'50px'} >
                <Box h={"290px"} padding={'10px'} >
                    <Text as='b'>
                        Choose fresh and organic products
                    </Text>
                    <Heading p={'10px'}>
                        SIMPLE, FAST AND CONVENIENT GROCERY STORE
                    </Heading>
                    <SimpleGrid columns={2} padding={'20px'} margin={'50px'} gridGap={'40px'}>
                        <Box bg='black' h={'50px'}>
                            <Text color={'white'} align={'center'} mt={'10px'}>
                                Google Play
                            </Text>
                        </Box>
                        <Box bg='black'>
                            <Text color={'white'} align={'center'} mt={'10px'}>
                                App Store
                            </Text>
                        </Box>
                    </SimpleGrid>
                </Box>
                <Box bg='pink'>
                    <Text align={'center'} mt={'80px'}>IMAGE</Text>
                </Box>
            </SimpleGrid>
            
            <Box bg={'pink'} h={'100px'}>
                <Flex justifyContent={'space-between'} p={'40px'}>
                    <Box>
                        <Text >Free Delivery</Text>
                    </Box>
                    <Box mt={'-10px'}>
                        <Text> Product from </Text>
                        <Text> Organic Farm</Text>
                    </Box>
                    <Box mt={'-10px'}>
                        <Text>No Minumum</Text>
                        <Text>Order</Text>
                    </Box>
                    <Box mt={'-10px'}>
                        <Text>Live Order </Text>
                        <Text> Tracking</Text>
                    </Box>
                    
                </Flex>
            </Box>


        </>
    )
}

export default Slogan