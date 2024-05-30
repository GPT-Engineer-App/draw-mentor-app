import { Container, Text, VStack, HStack, Avatar, Box, Image, SimpleGrid, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            Welcome to Drawing Lessons App
          </Text>
          <Text fontSize="lg" mt={4}>
            Learn to draw with our comprehensive tutorials and community support.
          </Text>
        </Box>

        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Featured Lessons
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1680634658753-d7ad8fadac7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmF3aW5nJTIwbGVzc29ufGVufDB8fHx8MTcxNzA4NzAwOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Lesson 1" borderRadius="md" />
              <Text mt={2} fontSize="lg" fontWeight="bold">
                Lesson 1
              </Text>
              <Text>Introduction to Drawing</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1680634658753-d7ad8fadac7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmF3aW5nJTIwbGVzc29ufGVufDB8fHx8MTcxNzA4NzAwOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Lesson 2" borderRadius="md" />
              <Text mt={2} fontSize="lg" fontWeight="bold">
                Lesson 2
              </Text>
              <Text>Advanced Techniques</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1680634658753-d7ad8fadac7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmF3aW5nJTIwbGVzc29ufGVufDB8fHx8MTcxNzA4NzAwOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Lesson 3" borderRadius="md" />
              <Text mt={2} fontSize="lg" fontWeight="bold">
                Lesson 3
              </Text>
              <Text>Mastering Shading</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Divider />

        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Testimonials
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                User 1
              </Text>
              <Text>"This app has transformed my drawing skills!"</Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                User 2
              </Text>
              <Text>"The community support is amazing."</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Divider />

        <Box textAlign="center">
          <Text fontSize="sm">&copy; 2024 Drawing Lessons App. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
