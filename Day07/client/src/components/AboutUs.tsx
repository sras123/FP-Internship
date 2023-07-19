import React from 'react'
import { Box, Text, SimpleGrid, Button, Flex } from "@chakra-ui/react";


const AboutUs = () => {
    return (
        <>
        <SimpleGrid bg={'pink'} columns={2} p={'20px'} mt={'100px'}
            height={'500px'} spacing='40px'>
            <Box bg={'pink.600'}>
                <Text color={'white'} align={'center'} mt='150px' fontSize={'40px'}>Image</Text>
            </Box>
            <Box >
                <Text fontSize={'40px'} as='b' mt='30px'  >
                    About Us
                </Text>
                <Text fontSize={'25px'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vel maiores saepe ea accusantium explicabo eum. Ipsum dolorum quaerat nostrum sint, maiores,
                    cumque reiciendis suscipit repudiandae officia minima fugiat, aliquam consequuntur.
                </Text>
                <Button size='lg' mt={'40px'} bg={'pink.400'}>
                    Learn More
                </Button>
            </Box>
        </SimpleGrid>

        <Box bg={'pink'} h={'100px'} mt={'50px'}>
        <SimpleGrid columns={3} p={'30px'} spacing='40px'>
            <Box >
                <Text> 2100+ </Text>
                <Text> Satisifed Client</Text>
            </Box>
            <Box>
                <Text>50+</Text>
                <Text>Active Participants</Text>
            </Box>
            <Box >
                <Text>50+ </Text>
                <Text>Food Categories</Text>
            </Box>
            
        </SimpleGrid>
    </Box>
    </>

    )
}

export default AboutUs