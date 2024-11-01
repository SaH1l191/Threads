import {  Container } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import LogoutButton from "./components/LogoutButton";
import HomePage from "./pages/HomePage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import userAtom from "./atoms/userAtom";
import CreatePost from "./components/CreatePost";

function App() {
	
	const user = useRecoilValue(userAtom) 
	console.log(user)
	return (
		<Container maxW="620px">
			<Header/>
			<Routes>
				<Route path='/' element={user ? <HomePage /> : <Navigate to={"/auth"}/>}/>
				<Route path='/auth/sigin' element={user ? <HomePage/> : <Navigate to={"/auth"}/>  }/>
				<Route path='/auth' element={user ? <Navigate to={"/"}/> : <AuthPage/>} />
				<Route path="/:username" element={<UserPage />}/>
				<Route path="/:username/post/:id" element={<PostPage />}/>
				<Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} />
			</Routes>
			{user && <LogoutButton />}
			{user && <CreatePost />}
		</Container>
	);
}

export default App;
