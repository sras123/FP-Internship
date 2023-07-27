import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Center,
  Heading,
  List,
  ListItem,
  UnorderedList,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";

const DataDisplay = () => {
  const formData = useSelector((state: any) => state.form.initialData);

  return (
    <Card variant={"elevated"} maxW="md" overflow="hidden" mt={"50px"}>
      <CardBody>
        <Box mt={"50px"} bgColor={"green.100"}>
          <Heading>Data Stored in Redux</Heading>
          <Center>
            {formData && (
              <div>
                <UnorderedList>
                  <List spacing={3}>
                    <ListItem>
                      <Text as="b">Username: {formData.userName}</Text>
                    </ListItem>
                    <ListItem>
                      <Text as="b">Email: {formData.email}</Text>
                    </ListItem>
                    <ListItem>
                      <Text as="b">Message: {formData.message}</Text>
                    </ListItem>
                    <ListItem>
                      <Text as="b">UserType: {formData.usertype}</Text>
                    </ListItem>
                    <ListItem>
                      <Text as="b">Gender: {formData.gender}</Text>
                    </ListItem>
                  </List>
                </UnorderedList>
              </div>
            )}
          </Center>
        </Box>
      </CardBody>
    </Card>
  );
};

export default DataDisplay;
