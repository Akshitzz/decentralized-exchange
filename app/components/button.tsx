"use client";
export const PrimaryButton = ({children,onClick}:
    {children?: React.ReactNode,
        onClick: () => void

    }
) => {
    return (
        <button onClick={onClick} type="button" className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">

            {children}
</button>
    )
}

export const SecondaryButton = ({children,onClick,prefix}:{
children: React.ReactNode,
onClick: () => void,
prefix?:React.ReactNode
})=>{
 return <button onClick={onClick} type="button" className="text-white bg-blue-500 hover:bg-blue-900 focus::outline-noe focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 flex">
    <div>
        {prefix}
    </div>
    <div>
        {children}
    </div>
 </button>
}


export const TabButton = ({active,children,onClick}:{
    active:boolean;
    children:React.ReactNode,
    onClick :()=> void
})=>{
    return <button type="button" className={`w-full text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2.5 mb-2 ${active ? "bg-blue-500": "bg-blue-300"}` } onClick={onClick}>{children}</button>
}