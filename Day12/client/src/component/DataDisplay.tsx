import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Center,
  Heading,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const DataDisplay = () => {
  const formData = useSelector((state: any) => state.form.initialData);
  console.log(formData);
  return (
    <Box mt={"50px"}>
      <Heading>Data Stored in Redux</Heading>
      <Center>
        {formData && (
          <div>
            <UnorderedList>
              <List spacing={3}>
                <ListItem>Username: {formData.username}</ListItem>
                <ListItem>Email: {formData.email}</ListItem>
                <ListItem>Message: {formData.message}</ListItem>
                <ListItem>Gender: {formData.gender}</ListItem>
              </List>
            </UnorderedList>
          </div>
        )}
      </Center>
    </Box>
  );
};

export default DataDisplay;
