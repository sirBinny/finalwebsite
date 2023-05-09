import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue
} from "@chakra-ui/react"


import { ChakraProvider } from '@chakra-ui/react'


export default function SplitScreen() {
  const capyBaraImg = "https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg"
  const originalStockImg = "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  return (
    <ChakraProvider>
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: .15,
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1
              }}
            > Up for a challenge?
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Learn JAVA
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
          Java is a multi-platform, object-oriented, 
          and network-centric language that can be used as a platform in itself. It is a fast, 
          secure, reliable programming language for coding everything from mobile apps 
          and enterprise software to big data applications and server-side technologies.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500"
              }}
            >
              Learn now
            </Button>
            <Button rounded={"full"}>More about Java</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            capyBaraImg
          }
        />
      </Flex>
    </Stack>
    </ChakraProvider>

  )
  
}
