import React from "react"
import Link from 'next/link'
const LinkButton : React.FC<{children: React.ReactNode, url: String}> = ({children, url}) => {

    return(
        <Link href={`${url}`} className="bg-white-200 border px-2 py-1 rounded-[15%] hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-zinc-900">{children}</Link>
    )
}

export default LinkButton