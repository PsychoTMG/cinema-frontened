'use client'
import Image from "next/image"
import { useState } from "react"

// const arrLi = [
//     { title: 'Главная' },
//     { title: 'Каталог' }
// ]

const Headers = () => {
    const [active, setActive] = useState<boolean>(false)

    const headerDown = () => {
        setActive(!active)
        console.log(active)
    }

    return (
        <div className="flex items-center justify-between h-14 px-3 ">

            <div className={`flex items-center gap-2 text-ui-13 font-medium ${active ? 'invisible' : ''}`}>
                <Image src='/profile.png' width={32} height={32} alt="provileAva" className="rounded-full" />
                Войти</div>
            <div>
                <Image src='/Okko.png' width={68} height={24} alt="logoOkko" />
            </div>
            <div className="flex gap-3">
                <Image src='icons/search.svg' width={24} height={24} alt="search" className={`${active ? 'invisible' : ''}`} />
                {!active ?
                    <Image src='icons/burger.svg' width={24} height={24} alt="burger" onClick={() => headerDown()} /> :
                    <Image src='icons/close.svg' width={24} height={24} alt="close" onClick={() => headerDown()} />}
            </div>

        </div>

    )
}

export default Headers