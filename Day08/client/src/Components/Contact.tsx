import React from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    RadioGroup,
    HStack,
    Radio,
    Textarea,
    Button, Icon
} from '@chakra-ui/react'
import { Box } from "@chakra-ui/react";
import { AiOutlineMail,AiOutlineUser } from "react-icons/ai";;

function Example() {
    return <Icon as={AiOutlineMail} />
}

const Contact = () => {
    return (
        <>
            <Box bg={'green.100'} w={'500px'} h={'500px'} mt={'30px'} marginBottom={'20px'}>
                <FormControl p={'50px'} mt={'10px'}>
                    <FormLabel>
                        Name
                        <Icon as={AiOutlineUser} marginLeft={'10px'} />
                    </FormLabel>
                    <Input type='email' placeholder='Enter your Name' borderColor={'green.400'} _hover={{ borderColor: 'Green' }}></Input>
                    <FormLabel mt={'10px'}>
                        Email address
                        <Icon as={AiOutlineMail} marginLeft={'10px'} />
                    </FormLabel>
                    <Input type='email' placeholder='Enter your email' borderColor={'green.400'} _hover={{ borderColor: 'Green' }}></Input>
                    <FormHelperText>We'll never share your email.</FormHelperText>

                    <FormLabel as='legend' mt={'10px'}>
                        Gender
                    </FormLabel>
                    <RadioGroup>
                        <HStack>
                            <Radio borderColor={'green.400'} _hover={{ borderColor: 'Green' }}>Female</Radio>
                            <Radio borderColor={'green.400'} _hover={{ borderColor: 'Green' }}>Male</Radio>
                            <Radio borderColor={'green.400'} _hover={{ borderColor: 'Green' }}>Intersex</Radio>
                            <Radio borderColor={'green.400'} _hover={{ borderColor: 'Green' }}>Transgender</Radio>
                        </HStack>
                    </RadioGroup>
                    <FormLabel mt={'10px'}>What can we help you with?</FormLabel>
                    <Textarea placeholder='Write here' borderColor={'green.400'} _hover={{ borderColor: 'Green' }}></Textarea>
                    <Button marginLeft={'160px'} mt={'10px'} bg={'green.400'} _hover={{ bg: 'green.600' }}>
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </>
    )
}

export default Contact