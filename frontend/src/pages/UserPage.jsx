import React, { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import { Flex, Spinner, useToast } from '@chakra-ui/react'
import Post from "../components/Post";
import useGetUserProfile from '../hooks/useGetUserProfile'
import { useRecoilState } from 'recoil';
import postAtom from '../atoms/postAtom';
import useShowToast from '../hooks/useShowToast';
import { useParams } from 'react-router-dom';
const UserPage = () => {


  const { username } = useParams()
  const [post, setPost] = useRecoilState(postAtom)
  const showToast = useShowToast()
  const [fetchingPosts, setFetchingPosts] = useState(true)
  //need to load the user(any) dynamically from the params 
  const { user, loading } = useGetUserProfile()

  console.log("fetchign the user profile based on username ", user)

  useEffect(() => {
    const getPosts = async () => {
      if (!user) return
      setFetchingPosts(true)
      try {
        const res = await fetch(`/api/posts/user/${username}`);
        const data = await res.json();
        console.log(data);
        setPost(data);
      }
      catch (error) {
        showToast("Error", error.message, "error");
        setPost([]);
      }
      finally {
        setFetchingPosts(false)
      }
    }

    getPosts()
  }, [username, user, setPost])







  if (!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );
  }

  if (!user && !loading) return <h1>User not found</h1>;




  return (
    <>
      <UserHeader user={user} />
      {/* <UserPost likes={10} replies={5}  postTitle="Post title"/>
    <UserPost likes={10} replies={5}  postTitle="Post title"/>
    <UserPost likes={10} replies={5}  postTitle="Post title"/>
    <UserPost likes={10} replies={5}  postTitle="Post title"/> */}


      {
        post.map((post) => (
          <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))
      }
    </>
  )
}

export default UserPage