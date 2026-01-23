'use client'

import { useState } from "react"
import Card from "../components/Card"
import Button from "./components/Button"
import Link from "next/link"


const films = [
    { title: 'Фильмы', link: '/catalog/collection/movies', },
    { title: 'Сериалы', link: '/catalog/collection/serials' },
    { title: 'Мультфильмы', link: '/catalog/collection' },
    { title: 'Фитнес', link: '/catalog/collection/fitnes' },
    { title: 'Природа', link: '/catalog/collection' },
    { title: 'Лекции', link: '/catalog/collection' },

]


const page = () => {

    const [activeButton, setActiveButton] = useState<boolean>(false)

    const showCatalog = () => setActiveButton(true)


    return (
        <div className="flex relative justify-center h-auto">
            <div
                className={`grid grid-cols-2 gap-1.5 mt-7 overflow-hidden transition-all duration-500
            ${activeButton ? 'max-h-300' : 'max-h-57'}`}
            >
                {films.map((item, idx) => <Link key={idx} href={item.link}> <Card key={idx} {...item} /></Link>)}
            </div>

            <Button showCatalog={showCatalog} activeButton={activeButton} />
        </div>
    )
}

export default page