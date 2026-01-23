'use client'


import Headers from "../components/Headers"

export default function ClientLayout({ children, }: { children: React.ReactNode }) {

    return (
        <>
            <div className="flex flex-col justify-center w-full">
                <Headers />
                {children}
            </div>
        </>

    )
}