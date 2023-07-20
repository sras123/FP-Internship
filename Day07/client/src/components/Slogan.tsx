import React from 'react'
import { Box, Text, SimpleGrid, Heading, Flex, Button,Image } from "@chakra-ui/react";

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
                        <Button bg='black' h={'50px'} _hover={{bg:'grey'}}>
                            <Text color={'white'} align={'center'} mt={'2px'}>
                                Google Play
                            </Text>
                        </Button>
                        <Button bg='black' h={'50px'} _hover={{bg:'grey'}} >
                            <Text color={'white'} align={'center'} mt={'2px'}>
                                App Store
                            </Text>
                        </Button>
                    </SimpleGrid>
                </Box>
                <Box >
                    <Image  src='https://images.pexels.com/photos/9899253/pexels-photo-9899253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                </Box>
            </SimpleGrid>
            
            <Box bg={'green.100'} h={'100px'}>
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