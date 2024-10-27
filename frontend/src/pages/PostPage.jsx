import { Avatar, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from '../components/Actions'
import Comments from '../components/Comments'

const PostPage = () => {

  const [liked, setLiked] = useState(false);


  return (
    <>

      {/* name and verified + image logo */}
      <Flex>
        <Flex w={'full'} alignItems={'center'} gap={3}>
          <Avatar src='/zuck-avatar.png' size={"md"} />
          <Flex>
            <Text fontSize={"sm"} fontWeight={600}>Zuck</Text>
            <Image src='/verified.png' w={4} h={4} ml={4} />
          </Flex>
        </Flex>
        {/* rgiht side 3dots and time */}
        <Flex gap={4} alignItems={"center"}>
          <Text>1d</Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      {/* post conetnt */}
      <Text my={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Text>
      <Box borderRadius={6} overflow={'hidden'} borderColor={"gray.light"}>
        <Image src='/post1.png' w={'full'} />
      </Box>

      {/* actions */}
      <Flex gap={3} my={1}>
        <Actions   liked={liked} setLiked={setLiked} replies={1} likes={2}/>
      </Flex>

      <Divider my={4}/>


      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"} >Get the app to like , reply and psot .</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4}/>


      <Comments comment={"hey this looks great"} createdAt={"1d"} likes={4}/>
      <Comments comment={"Nah "} createdAt={"3d"} likes={4}/>
      <Comments comment={"I like it "} createdAt={"2d"} likes={4}/>
      <Comments comment={"Nah "} createdAt={"4d"} likes={4}/>





    </>
  )
}

export default PostPage