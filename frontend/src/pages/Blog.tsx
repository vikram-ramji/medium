import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog"
import { Appbar } from "../components/Appbar"
import { BlogSkeleton } from "../components/BlogSkeleton"

export const Blog = () => {
    const { id } = useParams()
    const {loading, blog} = useBlog({
        id: id || ""
    })
    if (loading) {
        return <div className="flex flex-col h-screen">
            <Appbar/>
            <BlogSkeleton/>
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}