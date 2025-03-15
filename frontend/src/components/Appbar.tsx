import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return (
        <div className="border-b border-slate-200 flex justify-between items-center px-10 py-2">
            <Link to={"/blogs"} >
                <div className="font-semibold cursor-pointer">
                    Medium
                </div>
            </Link>
            <div className="space-x-4">
                <Link to={'/publish'}>
                    <button type="button" className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 mr-4 cursor-pointer">New</button>
                </Link>
                <Avatar size="big" name="Vikram" />
            </div>
        </div>
    )
}