import React from "react";
import { useState } from "react";
import { Heading, Stack, Input, Button, Box, Center } from "@chakra-ui/react";
import { gql, useMutation } from "@apollo/client";

const Login = () => {
  const LOGIN_USER = gql`
    mutation ($userName: String!, $password: String!) {
      signInUser(
        input: { credentials: { phone: $userName, password: $password } }
      ) {
        token
      }
    }
  `;

  const [loginUser] = useMutation(LOGIN_USER);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // userName and password

    // hit the login api
    const res = await loginUser({ variables: { userName, password } });

    const authToken = res.data?.signInUser?.token;

    localStorage.setItem("auth_token", authToken);
    // res =>
  };

  return (
    <div>
      <Box mt={"200px"}>
        <Center>
          <Stack spacing={3}>
            <Heading marginLeft={"50px"}>Login</Heading>
            <Input
              placeholder="Username"
              size="md"
              borderColor={"blackAlpha.500"}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <Input
              placeholder="Password"
              size="md"
              borderColor={"blackAlpha.500"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button borderColor={"pink"} onClick={handleLogin}>
              Login
            </Button>
          </Stack>
        </Center>
      </Box>
    </div>
  );
};

export default Login;
