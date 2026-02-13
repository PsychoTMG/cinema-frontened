import Link from 'next/link'

const NavItem = ({ name, href, onClick }: { name: string, href: string, onClick: () => void }) => {
    return (
        <li>
            <Link
                href={href}
                className="hover:text-ui-13 block w-full transition-colors py-2"
                onClick={onClick}
            >
                {name}
            </Link>
        </li>
    )
}

export default NavItem