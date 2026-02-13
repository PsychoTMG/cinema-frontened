import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href='/'>
            <Image src='/Okko.png' width={68} height={24} alt="logoOkko" priority />
        </Link>
    )
}

export default Logo