'use client'

import { useState } from "react"

const FilterBar = () => {
    const [active, setActive] = useState<boolean>(false)

    return (
        <div className="pl-3 h-11 flex items-center gap-3 pb-3">
            <button
                className={`flex items-center justify-between h-11 w-40 px-3 rounded-md bg-[#1b1a1d]`}
                onClick={() => setActive(!active)}
            >
                <span className="text-[14px] ">Бесплатно</span>

                <div className={`relative ${!active ? 'bg-[#2c2b2f]' : 'bg-[#5d0ef5]'} rounded-full w-13 h-7 flex items-center px-1 cursor-pointer`}>
                    <div className={`
                    bg-white w-6 h-6 rounded-full transition-transform duration-200 ease-in-out
                ${active ? 'translate-x-6' : 'translate-x-0'}
                `}></div>
                </div>
            </button>

            <button className={`flex items-center justify-between h-11 w-auto px-3 rounded-md bg-[#1b1a1d]`}>
                <span>Жанры</span>
            </button>
        </div>
    )
}

export default FilterBar