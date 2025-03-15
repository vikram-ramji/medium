import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 w-full px-10 max-w-screen-xl pt-12">
                <div className="col-span-8 space-y-4">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500">
                        Posted on 2nd Dec, 2023
                    </div>
                    <div>
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 space-y-4">
                    <div className="text-slate-700">
                        Author
                    </div>
                    <div className="flex">
                        <div className="pr-3 flex items-center">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catchphrase about the author's ability to catch attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}