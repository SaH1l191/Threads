import { useRecoilState } from "recoil"
import userAtom from "../atoms/userAtom"
import { useToast } from "@chakra-ui/react"





const useLogout =async()=>{
    const setUser= useRecoilState(userAtom)
    const showToast = useToast()


    const logout = async()=>{
        try{
            const res = await fetch("/api/users/logout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});
            const data =  await res.json();
            if(data.error){
                showToast("Error", data.message, "error")
                return
            }
            localStorage.removeItem('user-threads')
            setUser(null)
        }
        catch(error){
            showToast("Error", error, "error");
        }
    }
    return logout
}

export default useLogout