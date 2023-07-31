import React from "react";
import {
  Stack,
  Flex,
  Heading,
  Text,
  Container,
  Spacer,
  Button,
  Card,
  CardBody,
  Image,
  HStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledStack = styled.div`
  gap: 20px;
  margin-left: 400px;
  margin-right: 400px;
  margin-top: 20px;
`;

const BestProducts = () => {
  return (
    <>
      <Container mt={"40px"}>
        <Heading>BEST SELLING PRODUCTS</Heading>
      </Container>
      <StyledStack>
        <Stack>
          <Tabs>
            <TabList>
              <Tab>Fruits</Tab>
              <Tab>Vegetables</Tab>
              <Tab>Dairy Products</Tab>
              <Tab>Drinks</Tab>
              <Tab>Spices</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <Card maxW={"sm"}>
                  <CardBody>
                    <Image
                      src="https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      h={"400px"}
                    ></Image>
                    <Stack mt={"8"} spacing={"4"}>
                      <Heading>Strawberry</Heading>
                      <Flex align={"center"}>
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
              </TabPanel>
              <TabPanel>
                <Card maxW={"sm"}>
                  <CardBody>
                    <Image
                      src="https://images.pexels.com/photos/3943223/pexels-photo-3943223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      h={"400px"}
                    ></Image>
                    <Stack mt={"8"} spacing={"4"}>
                      <Heading>Almonds</Heading>
                      <Flex align={"center"}>
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
              </TabPanel>
              <TabPanel>
                <HStack mt={"50px"} gap={"50"} marginBottom={"50px"}>
                  <Card maxW={"sm"}>
                    <CardBody>
                      <Image
                        src="https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        h={"400px"}
                      ></Image>
                      <Stack mt={"8"} spacing={"4"}>
                        <Heading>Strawberry</Heading>
                        <Flex align={"center"}>
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
                  <Card maxW={"sm"}>
                    <CardBody>
                      <Image
                        src="https://images.pexels.com/photos/3943223/pexels-photo-3943223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        h={"400px"}
                      ></Image>
                      <Stack mt={"8"} spacing={"4"}>
                        <Heading>Almonds</Heading>
                        <Flex align={"center"}>
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
                </HStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </StyledStack>

      <HStack mt={"50px"} marginLeft={"250px"} gap={"50"} marginBottom={"50px"}>
        <Card maxW={"sm"}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              h={"400px"}
            ></Image>
            <Stack mt={"8"} spacing={"4"}>
              <Heading>Strawberry</Heading>
              <Flex align={"center"}>
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
        <Card maxW={"sm"}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/3943223/pexels-photo-3943223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              h={"400px"}
            ></Image>
            <Stack mt={"8"} spacing={"4"}>
              <Heading>Almonds</Heading>
              <Flex align={"center"}>
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
        <Card maxW={"sm"}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/6940986/pexels-photo-6940986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              h={"400px"}
            ></Image>
            <Stack mt={"8"} spacing={"4"}>
              <Heading>Noodles</Heading>
              <Flex align={"center"}>
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
  );
};

export default BestProducts;
