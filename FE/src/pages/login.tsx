import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
    const {
        handleSubmit,
        changeHandler,
        navigate,
        errorAlert,
        successAlert,
        form,
    } = useLogin();


    return (
        <Flex
            minH={"100vh"}
            alignItems={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Box
                width={"60%"}
                height={"100vh"}
                bgImage={
                    "https://ik.imagekit.io/lcfefbv0i/bgwhite.svg?updatedAt=1696671495243"
                }
                alignItems={"center"}
            >
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"}>
                            <Text color={"teal"}>
                                Sign in to K-
                                <Text as="span" color={"#83b735"}>
                                    Link
                                </Text>

                            </Text>
                        </Heading>

                    </Stack>
                    <Box

                        borderRadius={"30px"}
                        bgImage={
                            "https://ik.imagekit.io/lcfefbv0i/bg.svg?updatedAt=1696669804112"
                        }
                        boxShadow={"lg"}
                        p={8}
                    >
                        <form onSubmit={handleSubmit}>
                            {errorAlert && (
                                <Alert status="error" mb={4}>
                                    <AlertIcon />
                                    <AlertTitle mr={2}>Error!</AlertTitle>
                                    <AlertDescription>{errorAlert}</AlertDescription>
                                </Alert>
                            )}

                            {successAlert && (
                                <Alert status="success" mb={4}>
                                    <AlertIcon />
                                    <AlertTitle mr={2}>Success...</AlertTitle>
                                    <AlertDescription>{successAlert}</AlertDescription>
                                </Alert>
                            )}

                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        type="email"
                                        name="email"
                                        onChange={changeHandler}
                                        value={form.email}
                                        bg={"teal"}
                                    />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        name="password"
                                        onChange={changeHandler}
                                        value={form.password}
                                        bg={"teal"}
                                    />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: "column", sm: "row" }}
                                        align={"start"}
                                        justify={"space-between"}
                                    >
                                        <Flex gap={"5px"}>
                                            <Checkbox colorScheme="teal"></Checkbox>
                                            <Text>Remember me</Text>
                                        </Flex>

                                        <Text color={"white"}>Forgot password?</Text>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </form>
                        <Button
                            fontWeight={"bold"}
                            mt={"15px"}
                            type="submit"
                            width={"100%"}
                            padding={"5px 15px"}
                            border={"1px solid teal "}
                            borderRadius={"30px"}
                            bg={"white"}
                            color={"teal"}
                            _hover={{
                                bg: "teal",
                                color: "white",
                                border: "1px solid white",
                            }}
                            onClick={handleSubmit}
                        >
                            Sign in
                        </Button>
                    </Box>
                </Stack>
            </Box>
            <Box
                width={"40%"}
                bgImage={
                    "https://ik.imagekit.io/lcfefbv0i/bg.svg?updatedAt=1696669804112"
                }
                height={"100vh"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
            >
                <Heading color={"white"} fontSize={"60px"}>
                    Hello, Friend!
                </Heading>
                <Text width={"250px"} mt={"40px"} textAlign={"center"}>
                    Enter your personal details and start your journey with us
                </Text>
                <Box display={"flex"} width={"250px"} textAlign={"center"} mt={"40px"}>
                    <Text
                        fontWeight={"bold"}
                        width={"100%"}
                        padding={"5px 15px"}
                        border={"1px solid teal "}
                        borderRadius={"30px"}
                        bg={"white"}
                        color={"teal"}
                        _hover={{
                            bg: "teal",
                            color: "white",
                            border: "1px solid white",
                        }}
                        cursor={"pointer"}
                        ml={2}
                        onClick={() => navigate("/")}
                    >
                        Sign Up
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
}
