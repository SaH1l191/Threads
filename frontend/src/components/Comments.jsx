import { Avatar, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from './Actions'

const Comments = ({comment,createdAt,username , likes,userAvatar}) => {
    const [liked,setLiked] = useState(false)




  return (
    <>
    <Flex gap={4} py={2} my={2} w={"full"}>
        
        {/* image */}
       <Avatar src={userAvatar} size={"sm"}/>

        <Flex flexDirection={"column"} gap={1} w={"full"}>
            <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                {/* username */}
                <Text fontWeight={"bold"} fontSize={"sm"}>{username}</Text>

                {/*right side  = 3 dots and options  */}
                <Flex gap={4} alignItems={"center"}>
                    <Text>{createdAt}</Text>
                    <BsThreeDots cursor={"pointer"}/>
                </Flex>
            </Flex>

            {/* post text */}
            <Text>{comment}</Text>

                        {/* actions */} 
            <Actions liked={liked} setLiked={setLiked}/>
            <Text fontSize={"sm"} color={"gray.light"}> {likes} likes</Text>



        </Flex>

    </Flex>
    </>
  )
}

export default Comments