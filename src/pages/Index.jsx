import { Container, Text, VStack, HStack, Button, Avatar, Box, IconButton, Image, useToast } from "@chakra-ui/react";
import { FaUser, FaChalkboardTeacher, FaRegComments, FaBell } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleProfileClick = () => {
    toast({
      title: "Profile Clicked",
      description: "This will navigate to the profile page.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleLessonsClick = () => {
    toast({
      title: "Lessons Clicked",
      description: "This will navigate to the lessons page.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSupportClick = () => {
    toast({
      title: "Support Clicked",
      description: "This will navigate to the support page.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Text fontSize="3xl" fontWeight="bold">
          Welcome to Drawing Lessons App
        </Text>
        <HStack spacing={4}>
          <Avatar size="xl" name="User Name" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzA4NzAwN3ww&ixlib=rb-4.0.3&q=80&w=1080" />
          <VStack align="start">
            <Text fontSize="2xl">User Name</Text>
            <Button leftIcon={<FaUser />} colorScheme="teal" variant="solid" onClick={handleProfileClick}>
              Profile
            </Button>
          </VStack>
        </HStack>
        <HStack spacing={4}>
          <Button leftIcon={<FaChalkboardTeacher />} colorScheme="blue" variant="solid" onClick={handleLessonsClick}>
            Lessons
          </Button>
          <Button leftIcon={<FaRegComments />} colorScheme="green" variant="solid" onClick={handleSupportClick}>
            Support
          </Button>
        </HStack>
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Notifications
          </Text>
          <IconButton aria-label="Notifications" icon={<FaBell />} size="lg" />
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Featured Lesson
          </Text>
          <Image src="https://images.unsplash.com/photo-1680634658753-d7ad8fadac7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmF3aW5nJTIwbGVzc29ufGVufDB8fHx8MTcxNzA4NzAwOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Featured Drawing Lesson" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
