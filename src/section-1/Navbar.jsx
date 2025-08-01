import React, { useContext, useEffect, useState, useRef } from 'react';
import { BiUser } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../Context/ContextApi';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const { cart } = useContext(products);
    const dropdownRef = useRef(null);
    const [dropdownHeight, setDropdownHeight] = useState('0px');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (!menuOpen) {
                setShowNav(currentScrollY <= lastScrollY || currentScrollY < 100);
                setLastScrollY(currentScrollY);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, menuOpen]);

    useEffect(() => {
        if (menuOpen && dropdownRef.current) {
            setDropdownHeight(`${dropdownRef.current.scrollHeight}px`);
        } else {
            setDropdownHeight('0px');
        }
    }, [menuOpen]);

    let navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-transform duration-500 ease-in-out transform ${showNav ? 'translate-y-0' : '-translate-y-full'} bg-white shadow-md text-black`}>
            <div className='flex h-[100px] justify-between items-center p-4 px-4 md:px-16'>
                {/* Logo */}
                <h2 className="text-3xl font-bold cursor-pointer" onClick={() => navigate("/")}>
                    <span className="text-red-500">Time</span>
                    <span className="text-gray-800">Zone</span>
                </h2>

                {/* Desktop menu */}
                <ul className='hidden md:flex gap-8 font-semibold text-lg'>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </ul>

                {/* Desktop + Mobile User & Cart Icons */}
                <div className='flex items-center gap-3'>
                    {/* Desktop User profile */}
                    <div className='hidden md:flex gap-2 rounded-full p-1 px-3 border border-gray-400'>
                        <span>Abdul wasay</span><BiUser size="24px" />
                    </div>

                    {/* All screens Cart icon */}
                    <div className='relative'>
                        <p className='absolute -top-2 left-4 text-sm bg-red-500 text-white rounded-full px-2'>{cart}</p>
                        <Link to="/cart"><CgShoppingCart size="24px" /></Link>
                    </div>

                    {/* Hamburger menu (mobile only) */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className='p-2'>
                            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className="md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-lg"
                style={{ maxHeight: dropdownHeight }}
            >
                <div ref={dropdownRef} className="flex flex-col items-center py-6 space-y-4 font-medium text-lg">
                    <Link to="/" onClick={handleLinkClick}>Home</Link>
                    <Link to="/shop" onClick={handleLinkClick}>Shop</Link>
                    <Link to="/about" onClick={handleLinkClick}>About</Link>
                    <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;