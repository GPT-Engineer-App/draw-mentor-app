import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Button as={Link} to="/lessons" colorScheme="teal" variant="ghost">
          Lessons
        </Button>
        <Button as={Link} to="/profile" colorScheme="teal" variant="ghost">
          Profile
        </Button>
        <Button as={Link} to="/support" colorScheme="teal" variant="ghost">
          Support
        </Button>
      </Flex>
    </Box>
  );
}

export default Navigation;
