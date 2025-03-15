import { Link } from "react-router-dom"

export const AuthHeader = ({type}: {type: "signup" | "signin"}) => {
    return <div className="text-center space-y-2 px-10">
        <div className="text-3xl font-black">
            {type === "signup" ? "Create an account" : "Welcome back"}
        </div>
        <div className="text-slate-500">
            {type === "signup" ? "Already have an account?" : "Don't have an account?"} 
            <Link to={type === "signup" ? "/signin" : "/signup"} className="pl-2 underline">
                {type === "signup" ? "Login" : "Sign up"}
            </Link>
        </div>
    </div>
}