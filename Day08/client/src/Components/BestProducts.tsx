import React from 'react';
import { Stack, Flex, Heading, Text, Container, Spacer, Button, Card, CardBody, Image, HStack } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';

const BestProducts = () => {
    return (
        <>
            <Container mt={'90px'}>
                <Heading>BEST SELLING PRODUCTS</Heading>
            </Container>

            <Stack direction='row' gap={'20'} marginLeft={'300px'} mt={'20px'}>
                <Button variant='outline' colorScheme='Black' _hover={{ bg: 'pink' }}>All</Button>
                <Button variant='outline' colorScheme='Black' _hover={{ bg: 'pink' }}>Fruits</Button>
                <Button variant='outline' colorScheme='Black' _hover={{ bg: 'pink' }}>Vegetables</Button>
                <Button variant='outline' colorScheme='Black' _hover={{ bg: 'pink' }}>Dairy Products</Button>
                <Button variant='outline' colorScheme='Black' _hover={{ bg: 'pink' }}>Drinks</Button>
                <Button variant='outline' colorScheme='Black' _hover={{ bg: 'pink' }}>Spices</Button>
            </Stack>

            <HStack mt={'50px'} marginLeft={'250px'} gap={'50'}>
                <Card maxW={'sm'}>
                    <CardBody>
                        <Image src='https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' h={'400px'}></Image>
                        <Stack mt={'8'} spacing={'4'}>
                            <Heading>Strawberry</Heading>
                            <Flex align={'center'}>
                                <Text>Fruits</Text>
                                <Spacer />
                                <Text>$40 per kg</Text>
                                <Spacer />
                                <Button>
                                    <AddIcon />
                                </Button>
                            </Flex>

                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW={'sm'}>
                    <CardBody>
                        <Image src='https://images.pexels.com/photos/3943223/pexels-photo-3943223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' h={'400px'}></Image>
                        <Stack mt={'8'} spacing={'4'}>
                            <Heading>Almonds</Heading>
                            <Flex align={'center'}>
                                <Text>Nuts</Text>
                                <Spacer />
                                <Text>$40 per kg</Text>
                                <Spacer />
                                <Button>
                                    <AddIcon />
                                </Button>
                            </Flex>

                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW={'sm'}>
                    <CardBody>
                        <Image src='https://images.pexels.com/photos/6940986/pexels-photo-6940986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' h={'400px'}></Image>
                        <Stack mt={'8'} spacing={'4'}>
                            <Heading>Noodles</Heading>
                            <Flex align={'center'}>
                                <Text>Food</Text>
                                <Spacer />
                                <Text>$40 per kg</Text>
                                <Spacer />
                                <Button>
                                    <AddIcon />
                                </Button>
                            </Flex>

                        </Stack>
                    </CardBody>
                </Card>

            </HStack>
        </>

    )
}

export default BestProducts