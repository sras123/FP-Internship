import React, { useState } from "react";
import {
  Center,
  Box,
  Text,
  Input,
  Button,
  VStack,
  Image,
  Link,
  FormControl,
} from "@chakra-ui/react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const LOGIN_USER = gql`
    mutation ($phoneNumber: String!, $password: String!) {
      signInUser(
        input: { credentials: { phone: $phoneNumber, password: $password } }
      ) {
        token
      }
    }
  `;

  const [loggedIn] = useMutation(LOGIN_USER);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //   const handleLogin = async () => {
  //     const res = await loggedIn({ variables: { phoneNumber, password } });
  //     const authToken = res.data?.signInUser?.token;
  //     localStorage.setItem("auth_token", authToken);
  //   };
  const handleSubmit = async (event: any) => {
    if (!phoneNumber || !password) return;
    event.preventDefault();
    const res = await loggedIn({ variables: { phoneNumber, password } });
    const authToken = res.data?.signInUser?.token;
    localStorage.setItem("auth_token", authToken);
    if (authToken) {
      navigate("/");
    }
  };
  return (
    <Box
      bgGradient="linear(blue.700, #2026DF, blue.700)"
      w="100%"
      h="100vh"
      border={"1px solid blue"}
    >
      <Image
        src="/panda.png"
        boxSize="110px"
        mt={"60px"}
        marginLeft={"800px"}
      />
      <Center>
        <Box
          background={"#FFFFFF"}
          w="25%"
          h="45vh"
          mt={"30px"}
          borderRadius={"4px"}
          fontFamily={"sans-serif"}
        >
          <Box>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <VStack gap={5} p={"30px"}>
                  <Text fontSize={"23px"}>LOGIN </Text>

                  <Input
                    value={phoneNumber}
                    placeholder="Phone/Email"
                    variant="outline"
                    borderRadius={"0"}
                    size={"lg"}
                    _placeholder={{ color: "gray.400" }}
                    borderColor={"gray.300"}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                  <Input
                    value={password}
                    placeholder="Password"
                    variant="outline"
                    borderRadius={"0"}
                    size={"lg"}
                    _placeholder={{ color: "gray.400" }}
                    borderColor={"gray.300"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <Button
                    type="submit"
                    bgColor={"#E05443"}
                    variant="solid"
                    border={"none"}
                    borderRadius={"0"}
                    color={"white"}
                    size="lg"
                    colorScheme="orange"
                    //   onClick={handleLogin}
                    // onSubmit={handleSubmit}
                  >
                    Login
                  </Button>
                  {/* {loggedIn && (
                  <Navigate to="/dashboard" state={loggedIn} replace={true} />
                )} */}
                  <Text color={"#61C5F5"}>
                    <Link>Sign in with Google</Link>
                  </Text>
                  <Text color={"#61C5F5"}>
                    <Link>Sign in with Microsoft</Link>
                  </Text>
                </VStack>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Center>
      <Text color={"white"} marginLeft={"780px"} mt={"10px"}>
        <Link>Forgot your password?</Link>
      </Text>
    </Box>
  );
};

export default Login;
