import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import postAtom from '../atoms/postAtom'
import useShowToast from '../hooks/useShowToast'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import Post from '../components/Post'
import SuggestedUsers from '../components/SuggestedUsers'
const HomePage = () => {

  const [posts, setPosts] = useRecoilState(postAtom)
  const [loading, setLoading] = useState(true)
  const showToast = useShowToast()


  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true)
      setPosts([])
      try {
        const res = await fetch('/api/posts/feed')
        const data = await res.json()
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        console.log("data", data)
        setPosts(data)
      }
      catch (error) {
        showToast("Error", error.message, "error");
      }
      finally {
        setLoading(false);
      }
    }
    getFeedPosts()
  }, [setPosts])




  return (
    <Flex gap={10} alignItems={"flex-start"}>
      <Box  >
        {!loading && posts.length === 0 && <h1>Follow some users to see the feed</h1>}
        {loading && (
          <Flex justify='center'>
            <Spinner size='xl' />
          </Flex>
        )}
        {posts.map((post) => (
          <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))}
      </Box>
      <Box flex={30} display={{ base: "none", md: "block" }}>
        
        <SuggestedUsers/>
      </Box>
    </Flex>
  )
}

export default HomePage