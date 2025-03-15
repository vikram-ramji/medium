import { useEffect, useState } from "react"
import { AuthHeader } from "../components/AuthHeader"
import { Quote } from "../components/Quote"
import { SigninInput } from "@vikramiyer/medium-common"
import { LabelInput } from "../components/LabelInput"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    }, [navigate])

    const [postInputs, setPostInputs] = useState<SigninInput>({
        username: "",
        password: ""
    })

    const sendRequest = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs)
            const jwt = response.data.jwt
            localStorage.setItem("token", jwt)
            navigate('/blogs')
        } catch(e) {
            //alert user if response failed
            console.error("Error signing in", e)
        }
        
    }

    return <div>
        <div className="grid lg:grid-cols-2">
            <div className="h-screen flex justify-center items-center">
                <div className="space-y-8">
                    <AuthHeader type="signin" />
                    <div className="space-y-4">
                        <LabelInput label="Email" placeholder="name@example.com" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                username: e.target.value
                            }))
                        }} />
                        <LabelInput label="Password" type="password" placeholder="••••••" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />
                        <button onClick={sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4">Sign in</button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </div>
}