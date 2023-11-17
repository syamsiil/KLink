"use client";

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    Alert,
    AlertTitle,
    AlertIcon,
    AlertDescription,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

export default function Register() {
    const {
        form,
        handleSubmit,
        changeHandler,
        setShowPassword,
        errorAlert,
        successAlert,
        showPassword,
    } = useRegister();

    const navigate = useNavigate();

    return (
        <Flex
            minH={"200%"}
            align={"center"}
            justify={"center"}
            bgImage={
                "https://ik.imagekit.io/lcfefbv0i/bg.svg?updatedAt=1696669804112"
            }
        >
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
                    Welcome Back!
                </Heading>
                <Text
                    width={"250px"}
                    mt={"40px"}
                    textAlign={"center"}
                    fontWeight={"500"}
                >
                    To keep connected with us please login with your personal info
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
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Text>
                </Box>
            </Box>

            {/* RightSide */}
            <Box
                width={"60%"}
                bgImage={
                    "https://ik.imagekit.io/lcfefbv0i/bgwhite.svg?updatedAt=1696671495243"
                }
            >
                <Stack
                    spacing={8}
                    mx={"auto"}
                    maxW={"lg"}
                    py={6}
                    px={6}
                    width={"100em"}
                >
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"} textAlign={"center"} color={"teal"}>
                            Create Account
                        </Heading>

                    </Stack>
                    <Box
                        // rounded={"lg"}
                        borderRadius={"30px"}
                        bgImage={
                            "https://ik.imagekit.io/lcfefbv0i/bg.svg?updatedAt=1696669804112"
                        }
                        boxShadow={"lg"}
                        p={8}
                    >
                        <form onSubmit={handleSubmit}>
                            {errorAlert.map((alert, index) => (
                                <Alert key={index} status="error" mb={4}>
                                    <AlertIcon />
                                    <AlertTitle mr={2}>Error Submit!</AlertTitle>

                                    <AlertDescription>{alert as string}</AlertDescription>
                                </Alert>
                            ))}


                            {successAlert && (
                                <Alert status="success" mb={4}>
                                    <AlertIcon />
                                    <AlertTitle mr={2}>Success, Horayyy</AlertTitle>
                                    <AlertDescription>{successAlert}</AlertDescription>
                                </Alert>
                            )}

                            <Stack spacing={4}>
                                <FormControl id="username" isRequired>
                                    <FormLabel>Username</FormLabel>
                                    <Input
                                        minLength={3}
                                        name="username"
                                        type="text"
                                        onChange={changeHandler}
                                        value={form.username}
                                        bg={"teal"}
                                    />
                                </FormControl>

                                <FormControl id="first_name" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input
                                        name="first_name"
                                        type="text"
                                        onChange={changeHandler}
                                        value={form.first_name}
                                        bg={"teal"}
                                    />
                                </FormControl>

                                <FormControl id="first_name" isRequired>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input
                                        name="last_name"
                                        type="text"
                                        onChange={changeHandler}
                                        value={form.last_name}
                                        bg={"teal"}
                                    />
                                </FormControl>

                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        name="email"
                                        type="email"
                                        onChange={changeHandler}
                                        value={form.email}
                                        bg={"teal"}
                                    />
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            onChange={changeHandler}
                                            value={form.password}
                                            minLength={3}
                                            bg={"teal"}
                                        />
                                        <InputRightElement h={"full"}>
                                            <Button
                                                variant={"ghost"}
                                                onClick={() =>
                                                    setShowPassword((showPassword) => !showPassword)
                                                }
                                            >
                                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        type="submit"
                                        loadingText="Submitting"
                                        fontWeight={"bold"}
                                        mt={"15px"}
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
                                    >
                                        Sign up
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Box>
        </Flex>
    );
}
