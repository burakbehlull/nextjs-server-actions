import React from 'react'
const HeaderText : React.FC<{children:React.ReactNode}> = ({children}) => {

    return(
        <blockquote className="text-2xl font-semibold italic text-center text-sky-600 mt-6">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-300 relative inline-block">
                <span className="relative text-white">{children}</span>
            </span>
        </blockquote>
    )

}
export default HeaderText