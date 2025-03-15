export const Quote = () => {
    return <div className="bg-slate-200 h-screen flex items-center justify-center p-6">
        <div className="max-w-lg space-y-4 text-center">
            <blockquote className="text-3xl font-bold text-gray-700">
                "The customer service I received was exceptional. The support team went above and beyond to address my
                concerns."
            </blockquote>
            <div>
                <div className="font-semibold">
                    Jules Winnfield
                </div>
                <div className="text-sm font-light text-slate-500">
                    CEO, Acme Inc
                </div>
            </div>
        </div>
    </div>
}