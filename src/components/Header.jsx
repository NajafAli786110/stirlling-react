import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="flex items-center justify-between w-[90%] py-7 absolute z-10 top-0">
            <Link href="/">
                <p className="font-bold">StirllingPhotography</p>
            </Link>
            <ul className="header-menu-list flex gap-4 items-center justify-center">
                <Link href="/services">
                    <li className="header-menu">About</li>
                </Link>
                <Link href="/services">
                    <li className="header-menu">Portfolio</li>
                </Link>
                <Link href="/services">
                    <li className="header-menu">Services</li>
                </Link>
                <Link href="/contact">
                    <li className="header-menu">Contact</li>
                </Link>
            </ul>
            <Link
                href="/contact"
                className="px-9 bg-white rounded-full text-black py-2"
            >
                Contact Us
            </Link>
        </header>
    )
}
