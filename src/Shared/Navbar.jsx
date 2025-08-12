// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Education", path: "/education" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-[#0d1b2a] shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-[1600px] w-11/12 mx-auto px-4 flex justify-between items-center h-16">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
                >
                    MyPortfolio
                </Link>


                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `hover:text-[#f85f50] transition ${isActive ? "text-[#f85f50] font-semibold" : "text-gray-300"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden bg-[#0d1b2a] px-4 py-2 space-y-2 shadow-md">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2 hover:text-[#f85f50] transition ${isActive ? "text-[#f85f50] font-semibold" : "text-gray-300"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
