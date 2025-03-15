import { ChangeEvent } from "react"

interface LabelInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

export const LabelInput = ({ label, placeholder, onChange, type }: LabelInputType) => {
    return <div>
        <label htmlFor="first_name" className="block mb-2 text-sm text-gray-900 font-semibold">
            {label}
        </label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 " placeholder={placeholder} required />
    </div>
}