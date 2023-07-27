import React, { useState } from "react";
import "./App.css";
import {
  Input,
  Box,
  Button,
  Radio,
  RadioGroup,
  Select,
  Center,
  Heading,
  Textarea,
  SimpleGrid,
  Card,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { saveData } from "./slice/formSlice";
import DataDisplay from "./components/DataDisplay";

function App() {
  const usertype = ["admin", "user", "moderator"];
  const userTypeOptions = usertype.map((usertype, key) => (
    <option value={usertype} key={key}>
      {usertype}
    </option>
  ));
  const disptach = useDispatch();
  const [initialFormValues] = useState({
    userName: "",
    email: "",
    message: "",
    usertype: "",
    gender: "",
  });

  const formValidationSchema = Yup.object({
    userName: Yup.string()
      .min(3, "Must have three or more than three characters")
      .required("Username is required"),
    email: Yup.string().email("Invalid Email Address").required("Required"),
    message: Yup.string()
      .min(1, "Must have one or more than one characters")
      .required("Required"),
    usertype: Yup.string().required("Please select a type").oneOf(usertype),
    gender: Yup.string(),
  });

  const formikInstance = useFormik({
    initialValues: initialFormValues,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      disptach(saveData(values));
    },
  });

  // console.log(formikInstance.values);

  return (
    <div className="App">
      <SimpleGrid columns={2}>
        <Card marginLeft={"300px"} mt={"50px"} maxW={"sm"} variant={"elevated"}>
          <Box>
            <Heading mt={"50px"} color={"black"}>
              Formik and Yup
            </Heading>
            <Box mt={"40px"}>
              <Center>
                <form onSubmit={formikInstance.handleSubmit}>
                  <label>
                    <Text as="b">Username:</Text>
                  </label>
                  <Input
                    type="text"
                    name="userName"
                    onChange={formikInstance.handleChange}
                    outlineColor={"blackAlpha.400"}
                  />
                  {formikInstance.errors.userName ? (
                    <div>{formikInstance.errors.userName}</div>
                  ) : null}
                  <br />
                  <label>
                    {" "}
                    <Text as="b">Email:</Text>
                  </label>
                  <Input
                    type="text"
                    name="email"
                    onChange={formikInstance.handleChange}
                    outlineColor={"blackAlpha.400"}
                  />
                  {formikInstance.errors.email ? (
                    <div>{formikInstance.errors.email}</div>
                  ) : null}
                  <br />
                  <label>
                    <Text as="b">Message:</Text>
                  </label>
                  <Textarea
                    name="message"
                    onChange={formikInstance.handleChange}
                    outlineColor={"blackAlpha.400"}
                  />
                  {formikInstance.errors.message ? (
                    <div>{formikInstance.errors.message}</div>
                  ) : null}
                  <br />
                  <label>
                    <Text as="b">Options</Text>
                  </label>
                  <Select
                    name="usertype"
                    as="select"
                    onChange={formikInstance.handleChange}
                    outlineColor={"blackAlpha.400"}
                  >
                    <option value={""}>Select a type</option>
                    {userTypeOptions}
                  </Select>

                  {formikInstance.errors.usertype ? (
                    <div>{formikInstance.errors.usertype}</div>
                  ) : null}

                  <label>
                    <Text as="b">Gender:</Text>
                  </label>
                  <br />
                  <RadioGroup
                    onChange={(e) => {
                      console.log(e);
                    }}
                  >
                    <Radio
                      value="female"
                      name="gender"
                      onChange={formikInstance.handleChange}
                    >
                      <Text as="b">Female</Text>
                    </Radio>
                    <Radio
                      value="male"
                      name="gender"
                      onChange={formikInstance.handleChange}
                    >
                      <Text as="b">Male</Text>
                    </Radio>
                  </RadioGroup>

                  <br />
                  {formikInstance.errors.gender ? (
                    <div>{formikInstance.errors.gender}</div>
                  ) : null}
                  <Button colorScheme="blue" type="submit" mt={"5px"}>
                    Submit
                  </Button>
                </form>
              </Center>
            </Box>
          </Box>
        </Card>
        <Box>
          <DataDisplay />
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default App;
