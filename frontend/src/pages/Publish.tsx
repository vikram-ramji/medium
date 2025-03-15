import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { CreateBlogInput } from "@vikramiyer/medium-common"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const navigate = useNavigate()

    const [postInputs, setPostInputs] = useState<CreateBlogInput>({
        title: "",
        content: ""
    })

    const [isPublishing, setIsPublishing] = useState(false)

    const sendRequest = async () => {
        try {
            setIsPublishing(true)
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                postInputs,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )
            navigate(`/blog/${response.data.id}`)
        } catch(e) {
            //alert user if response failed
            console.error("Error signing up", e)
            setIsPublishing(false)
        }
        
    }

    return <div>
        <Appbar />
        <div className="flex gap-4 justify-center m-10">
            <div className="flex-1 space-y-4 max-w-screen-lg">
                <input
                    onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            title: e.target.value
                        }))
                    }}
                    type="text"
                    placeholder="Title"
                    className="w-full pl-4 border-l border-slate-300 text-5xl font-serif focus:outline-none"
                />
                <textarea
                    onChange={(e) => {
                        setPostInputs(c =>({
                            ...c,
                            content: e.target.value
                        }))
                    }}
                    placeholder="Tell your story..."
                    className="w-full pl-4 resize-none border-none text-xl focus:outline-none"
                    rows={10}
                />
                <div className="mt-16 mb-8 flex items-center justify-between border-t border-slate-200 pt-6">
                    <div>
                        <p className="text-sm text-slate-500">Ready to share your story with the world?</p>
                    </div>
                    <button 
                    onClick={sendRequest}
                    disabled={isPublishing}
                    type="button" 
                    className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2 text-center  cursor-pointer">
                        Publish
                    </button>
                </div>
            </div>
        </div>
    </div>
}