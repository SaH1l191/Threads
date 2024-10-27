import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'
const UserPage = () => {
  return (
    <>
    <UserHeader/>
    <UserPost likes={10} replies={5}  postTitle="Post title"/>
    <UserPost likes={10} replies={5}  postTitle="Post title"/>
    <UserPost likes={10} replies={5}  postTitle="Post title"/>
    <UserPost likes={10} replies={5}  postTitle="Post title"/>
    </>
  )
}

export default UserPage