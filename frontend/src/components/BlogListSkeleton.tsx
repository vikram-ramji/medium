import { Appbar } from "./Appbar"

export const BlogListSkeleton = () => {
    return <div>
        <Appbar />
        <div className="flex justify-center mt-4">
            <div role="status" className="p-4 space-y-4 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 pl-2 pt-4 w-screen max-w-screen-sm lg:max-w-screen-md">
                <div className="flex items-center justify-between">
                    <div className="w-full space-y-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    </div>
}