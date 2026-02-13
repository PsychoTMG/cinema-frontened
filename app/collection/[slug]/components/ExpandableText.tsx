'use client'

import { Catalog } from "@/app/types/catalog"
import { useState } from "react"

const ExpandableText = ({ catalog }: { catalog: Catalog }) => {
    const [readMore, setReadMore] = useState<boolean>(false)

    return (
        <div className="px-3 pb-3 pt-7.5 leading-10">
            <h1 className="text-3xl font-bold">{catalog.title}</h1>
            <p className="text-[#fffff5ad]">{!readMore ? catalog.description.slice(0, 38) + '...' : <p className="leading-6">{catalog.description}</p>} </p>
            {!readMore ? <p onClick={() => setReadMore(true)} className="text-violet">Читать всё</p> : ''}
        </div>
    )
}

export default ExpandableText