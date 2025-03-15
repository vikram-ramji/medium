export const BlogSkeleton = () => {
    return (
      <div>
        <div role="status" className="mx-auto p-6 animate-pulse">
          <div className="flex justify-center">
            <div className="grid grid-cols-12 w-full px-10 max-w-screen-xl pt-12 space-x-10">
              {/* Main blog content skeleton */}
              <div className="col-span-8 space-y-4">
                {/* Title skeleton */}
                <div className="h-10 bg-gray-300 rounded w-3/4"></div>
                {/* Date skeleton */}
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                {/* Content skeleton */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                </div>
              </div>
              {/* Author info skeleton */}
              <div className="col-span-4 space-y-4">
                {/* Label skeleton */}
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="flex items-center space-x-4">
                  {/* Avatar skeleton */}
                  <div className="pr-3 flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    {/* Author name skeleton */}
                    <div className="h-4 bg-gray-300 rounded w-32"></div>
                    {/* Catchphrase skeleton */}
                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };