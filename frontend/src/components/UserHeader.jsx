import { Box, VStack, Flex, Text, Link } from '@chakra-ui/layout'
import { Avatar, Menu, MenuButton, MenuItem, MenuList, Portal, Toast, useToast } from '@chakra-ui/react'
import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
const UserHeader = () => {

    const toast = useToast()


    const copyURL= ()=>{
        const copyUrl = window.location.href
        navigator.clipboard.writeText(copyUrl)
        .then(()=>{toast({
            description: "Profile Link  Copied Successfully!",
          })})
        console.log(copyUrl)
    }




    return (
        <VStack gap={4} alignItems={"start"}>
            <Flex w={'full'} alignItems="center" justifyContent="space-between">


                <Box bg={""}>
                    <Text fontSize={"2xl"}>Mark Zukerberg</Text>
                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"} >@mark_zuikerberg</Text>
                        <Text fontSize={"xs"} color={'gray.light'}   
                            borderRadius={"full"} p={"1"}>threads.next</Text>
                    </Flex>
                </Box>
                <Box>
                    <Avatar size={'xl'} name='Mark Zuckerberg' src='/zuck-avatar.png'></Avatar>
                </Box>
            </Flex>

            <Flex>
                <Text>Co-founder of Facebook and Instagram, Mark is the founder of Square, a payments company.</Text>
            </Flex>


            <Flex w={'full'} justifyContent={"space-between"} >
                <Flex gap={2} alignItems={"center"}>
                    <Text color={'gray.light'}>3.2k followers</Text>
                    <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"}></Box>
                    <Link color={"gray.light"}>instagram.com</Link>
                </Flex>

                <Flex>
                    <Box className='icon-container'>
                        <BsInstagram size={24} cursor={"pointer"} />
                    </Box>
                    <Box className='icon-container'>
                        <Menu>
                            <MenuButton>
                                <CgMoreO size={24} cursor={"pointer"} />
                            </MenuButton>

                            <MenuList bg={"gray.dark"}>
                                <MenuItem bg={"gray.dark"}
                                onClick={copyURL}>Copy Link</MenuItem>
                            </MenuList>


                        </Menu>

                    </Box>
                </Flex>

            </Flex>

            <Flex w={'full'}>
                <Flex  flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"}
                    pb={3} cursor={"pointer"}>
                    <Text fontWeight={"bold"}>Threads</Text>
                </Flex>
                <Flex  flex={1} borderBottom={"1.5px solid gray"} justifyContent={"center"}
                    pb={3} cursor={"pointer"}>
                    <Text fontWeight={"bold"}>Replies</Text>
                </Flex>
            </Flex>




        </VStack>
    )
}

export default UserHeader