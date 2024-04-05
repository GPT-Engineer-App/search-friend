import React, { useState } from "react";
import { Box, Input, Button, Text, Stack, Heading, Flex, IconButton, Spacer, Avatar, VStack, HStack, Divider, Image } from "@chakra-ui/react";
import { FaSearch, FaBookmark, FaUser, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  const handleSearch = () => {
    // Simulated search results
    const results = [
      {
        title: "Search Result 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://example.com/result1",
      },
      {
        title: "Search Result 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "https://example.com/result2",
      },
      // Add more search results as needed
    ];
    setSearchResults(results);
  };

  const handleChatSend = () => {
    if (chatInput.trim() !== "") {
      const userMessage = { text: chatInput, sender: "user" };
      const aiMessage = { text: "AI response to: " + chatInput, sender: "ai" };
      setChatMessages([...chatMessages, userMessage, aiMessage]);
      setChatInput("");
    }
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Box bg="gray.100" py={4} px={8}>
        <Flex align="center">
          <Heading size="lg" mr={4}>
            AI Web Search
          </Heading>
          <Spacer />
          <IconButton icon={<FaBookmark />} aria-label="Bookmarks" variant="ghost" />
          <IconButton icon={<FaUser />} aria-label="Profile" variant="ghost" ml={2} />
        </Flex>
      </Box>

      <Flex flex={1}>
        <Box flex={2} p={8}>
          <Stack spacing={4}>
            <Flex>
              <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Enter your search query" mr={4} />
              <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
                Search
              </Button>
            </Flex>

            {searchResults.map((result, index) => (
              <Box key={index} p={4} borderWidth={1} borderRadius="md">
                <Heading size="md" mb={2}>
                  {result.title}
                </Heading>
                <Text mb={2}>{result.description}</Text>
                <Text color="blue.500">{result.url}</Text>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box flex={1} bg="gray.100" p={8}>
          <VStack spacing={4} align="stretch">
            {chatMessages.map((message, index) => (
              <HStack key={index} justify={message.sender === "user" ? "flex-end" : "flex-start"}>
                {message.sender === "ai" && <Avatar size="sm" name="AI" src="https://images.unsplash.com/photo-1633957897986-70e83293f3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGF2YXRhcnxlbnwwfHx8fDE3MTIzNjA5MjB8MA&ixlib=rb-4.0.3&q=80&w=1080" />}
                <Box p={3} borderRadius="md" bg={message.sender === "user" ? "blue.500" : "white"} color={message.sender === "user" ? "white" : "gray.800"}>
                  {message.text}
                </Box>
                {message.sender === "user" && <Avatar size="sm" name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMjIwNTI0NXww&ixlib=rb-4.0.3&q=80&w=1080" />}
              </HStack>
            ))}
          </VStack>

          <Divider my={4} />

          <Flex>
            <Input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Type your message" mr={4} />
            <IconButton icon={<FaPaperPlane />} colorScheme="blue" onClick={handleChatSend} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Index;
