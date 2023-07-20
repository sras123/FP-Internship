import React from 'react'
import { Box, Text, SimpleGrid, Button, Image } from "@chakra-ui/react";

const AboutUs = () => {
    return (
     <>
        <SimpleGrid bg={'green.100'} columns={2} p={'20px'} mt={'100px'}
            height={'500px'} spacing='40px'>
            <Box >
                <Image src='https://images.pexels.com/photos/2252482/pexels-photo-2252482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
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
                <Button size='lg' mt={'20px'} bg={'green.400'}>
                    Learn More
                </Button>
            </Box>
        </SimpleGrid>

        <Box bg={'green.100'} h={'100px'} mt={'50px'}>
        <SimpleGrid columns={3} p={'30px'} spacing='40px' marginLeft={'200px'}>
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