import React, { useState } from "react";
import "./App.css";
import {
  Input,
  Box,
  Button,
  Checkbox,
  Select,
  Center,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { saveData } from "./slice/formSlice";
import DataDisplay from "./component/DataDisplay";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
    usertype: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    message: "",
    usertype: "",
    gender: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((pervFormData) => ({ ...pervFormData, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validator = (inputData: typeof formData) => {
    let isValid = true;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (inputData.username.length < 3) {
      setErrors((prev) => ({
        ...prev,
        username: "Username must be at least 3 characters",
      }));
      isValid = false;
    }
    if (!["moderator", "admin", "user"].includes(inputData.usertype)) {
      setErrors((prev) => ({
        ...prev,
        usertype: "Should be one of moderator , admin, user",
      }));
      isValid = false;
    }
    if (!emailRegex.test(inputData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "should be a valid email format",
      }));
      isValid = false;
    }
    if (inputData.message.length < 1) {
      setErrors((prev) => ({
        ...prev,
        message: "Messsage should be one charater long",
      }));
    }
    if (!["male", "female", "other"].includes(inputData.gender)) {
      setErrors((prev) => ({
        ...prev,
        gender: "Should be one of male, female or others",
      }));
    }
    return isValid;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);

    const isValid = validator(formData);

    if (!isValid) return;

    alert(
      `Username:${formData.username},   Email: ${formData.email}, Message: ${formData.message}, Option: ${formData.usertype}, Gender: ${formData.gender}`
    );

    dispatch(saveData(formData));
  };

  const handleDropDown = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleChecked = (event: any) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender: checked ? name : "",
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // console.log(formData);

  return (
    <div className="App">
      <Heading mt={"50px"}>Form</Heading>
      <Box mt={"50px"}>
        <Center>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors?.username && (
              <div style={{ color: "red" }}>{errors.username} </div>
            )}
            <br />
            <label> Email:</label>
            <Input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors?.email && (
              <div style={{ color: "red" }}>{errors.email} </div>
            )}
            <br />
            <label>message:</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors?.message && (
              <div style={{ color: "red" }}>{errors.message} </div>
            )}
            <br />
            <label>
              Options:
              <Select
                name="usertype"
                value={formData.usertype}
                onChange={handleDropDown}
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="moderator">Moderator</option>
              </Select>
            </label>
            {errors?.usertype && (
              <div style={{ color: "red" }}>{errors.usertype} </div>
            )}
            <label>Gender: </label>
            <br />
            <Checkbox
              type="checkbox"
              name="female"
              checked={formData.gender === "female"}
              value={formData.gender}
              onChange={handleChecked}
            />
            Female
            <Checkbox
              type="checkbox"
              name="male"
              checked={formData.gender === "male"}
              value={formData.gender}
              onChange={handleChecked}
            />
            Male
            <Checkbox
              type="checkbox"
              name="other"
              checked={formData.gender === "other"}
              value={formData.gender}
              onChange={handleChecked}
            />
            Other
            {errors?.gender && (
              <div style={{ color: "red" }}>{errors.gender} </div>
            )}
            <br />
            <Button colorScheme="blue" type="submit" mt={"10px"}>
              Submit
            </Button>
          </form>
        </Center>
      </Box>

      <DataDisplay />
    </div>
  );
}

export default App;
