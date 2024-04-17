export default function Header() {
    return (
        <header className="flex items-center justify-between w-[90%] py-7 absolute z-10 top-0">
            <a href="/">
                <p className="font-bold logo-main">StirllingPhotography</p>
            </a>
            <ul className="header-menu-list flex gap-4 items-center justify-center">
                <a href="#about">
                    <li className="header-menu">About</li>
                </a>
                <a href="#portfolio">
                    <li className="header-menu">Portfolio</li>
                </a>
                <a href="#services">
                    <li className="header-menu">Services</li>
                </a>
                <a href="#contact">
                    <li className="header-menu">Contact</li>
                </a>
            </ul>
            <a
                href="/contact"
                className="px-9 bg-white rounded-full text-black py-2 header-btn"
            >
                Contact Us
            </a>
        </header>
    )
}
