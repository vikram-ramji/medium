import axios from "axios"
import { useEffect } from "react"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/user/me`,
            {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        )
        .then(
            () =>{
                navigate("/blogs")
            },
            () => {
                navigate("/signup")
            }
        )
    })

    return <div></div>
}