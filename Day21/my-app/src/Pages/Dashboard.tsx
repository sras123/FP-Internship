import React from "react";
import { Box, Button, Center, VStack } from "@chakra-ui/react";

import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <Box
        bgGradient="linear(blue.700, #2026DF, blue.700)"
        w="100%"
        h="100vh"
        border={"1px solid blue"}
      >
        <VStack>
          <Center>
            <Button
              bgColor={"#E05443"}
              variant="solid"
              border={"none"}
              borderRadius={"0"}
              color={"white"}
              size="lg"
              colorScheme="orange"
              onClick={handleLogout}
              mt={"100px"}
              marginLeft={"20px"}
            >
              Logout
            </Button>
          </Center>
        </VStack>
      </Box>
    </div>
  );
};

export default Dashboard;
