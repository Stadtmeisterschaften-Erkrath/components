"use client";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function Note(props: Props) {
    return (
        <div className={`rounded-lg border-gray-300 text-gray-600 border px-4 py-3 ${props.className} inline-flex text-sm`}>
            <span className={`my-auto fill-gray-400`}>
                <svg height="16" viewBox="0 0 16 16" width="16">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.25 7H7H7.74999C8.30227 7 8.74999 7.44772 8.74999 8V11.5V12.25H7.24999V11.5V8.5H7H6.25V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z" fill="currentColor"></path>
                </svg>
            </span>

            <span className="ml-2">
                {props.children}
            </span>
        </div>
    )
}