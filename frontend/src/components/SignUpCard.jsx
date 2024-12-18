
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useSetRecoilState } from 'recoil'
import { authScreenAtom } from '../atoms/authAtom'
import { redirect } from 'react-router-dom'

export default function SignupCard() {
  const toast = useToast()


  const setAuthScreenState = useSetRecoilState(authScreenAtom)


  const [showPassword, setShowPassword] = useState(false)
  const [inputs, setInputs] = useState({
    name: "",
    username: "", email: "", password: ""
  })


  const handleSignup = async () => {
    try {

      //direc the api endpoint as we have set the host in vite config 
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
      })
      const data =await res.json()
      console.log(data)
      if(data.error) {
        toast({
          title:"Error",
          description: data.error,
          status : "error",
          duration : 3000,
          isClosable:true
        
        })
        return ;
      }
      localStorage.setItem('user-threads',JSON.stringify(data))
      redirect("/:username")

    }
    //stringfiy converts objcet to josn 
    catch (error) {
      console.log(error)
      toast({
        title:"Error",
        description: "Profile Link  Copied Successfully!",
        status : "error",
        duration : 3000,
        isClosable:true
      
      })
    }
  }






  return (
    <Flex
      align={'center'}
      justify={'center'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="name" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="username" isRequired>
                  <FormLabel>UserName</FormLabel>
                  <Input type="text" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button onClick={() => handleSignup()}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}
                  onClick={() => setAuthScreenState("login")}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}