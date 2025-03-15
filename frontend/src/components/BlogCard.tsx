import { Link } from "react-router-dom"

interface BlogCardProps {
    id: number
    authorName:string
    title: string
    content: string
    publishedDate: string
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`} >
        <div className="border-b border-slate-200 pl-2 pt-4 w-screen max-w-screen-sm lg:max-w-screen-md cursor-pointer">
            <div className="flex items-center space-x-2">
                <div>
                    <Avatar name={authorName} />
                </div>
                <div className="font-extralight text-sm">
                    {authorName}
                </div>
                <div className="flex items-center">
                    <span>&#183;</span>
                </div>
                <div className="font-thin text-sm text-slate-500">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="font-thin">
                {content.slice(0,100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-2 pb-3">
                {Math.ceil(content.length / 100)} min read
            </div>
        </div>
    </Link>
}

export const Avatar = ({ name, size = "small" }: { name: string, size?: "small" | "big" }) => {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs": "text-base"} font-medium text-gray-600`}>{name[0]}</span>
    </div>
}