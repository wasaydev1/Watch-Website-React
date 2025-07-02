// import React, { useContext, useEffect, useState } from 'react';
// import { BiUser } from 'react-icons/bi';
// import { CgShoppingCart } from 'react-icons/cg';
// import { Link } from 'react-router-dom';
// import { products } from '../Context/ContextApi';

// const Navbar = () => {
//     const [showNav, setShowNav] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [currentScroll, setCurrentScroll] = useState(0);
//     const { cart } = useContext(products);

//     useEffect(() => {
//         function handleScroll() {
//             const currentScrollY = window.scrollY;
//             setShowNav(currentScrollY <= lastScrollY || currentScrollY < 100);
//             setLastScrollY(currentScrollY);
//         }
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [lastScrollY]);

//     return (
//         <nav className={`fixed top-0 w-full z-50 transition-transform duration-500 ease-in-out transform ${showNav ? 'translate-y-0' : '-translate-y-full'} bg-white shadow-md text-black flex h-[100px] justify-around items-center p-4`}>
//             <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="logo" />
//             <ul className='flex gap-8 font-semibold text-lg'>
//                 <Link to="/" >Home</Link>
//                 <Link to="/shop">Shop</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/contact">Contact</Link>
//             </ul>
//             <div className='flex gap-3 items-center'>
//                 <div className='border flex gap-2 rounded-full p-1 border-gray-400'>
//                     <span>Abdul wasay</span><BiUser size="24px" />
//                 </div>
//                 <div className='flex rounded-full p-1 relative'>
//                     <p className='absolute bottom-6 left-4 text-sm bg-red-500 text-white rounded-full px-2'>{cart}</p>
//                     <Link to="/cart"><CgShoppingCart size="24px" /></Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



















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


    let navigate = useNavigate()

    return (
        <nav className={`fixed top-0 w-full z-50 transition-transform duration-500 ease-in-out transform ${showNav ? 'translate-y-0' : '-translate-y-full'} bg-white shadow-md text-black`}>
            <div className='flex h-[100px] justify-between items-center p-4 px-6 md:px-16'>
                <h2 className="text-4xl font-bold mb-4 cursor-pointer" onClick={()=>navigate("/")}>
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

                {/* User + Cart */}
                <div className='hidden md:flex gap-3 items-center'>
                    <div className='border flex gap-2 rounded-full p-1 px-3 border-gray-400'>
                        <span>Abdul wasay</span><BiUser size="24px" />
                    </div>
                    <div className='flex rounded-full p-1 relative'>
                        <p className='absolute -top-2 left-4 text-sm bg-red-500 text-white rounded-full px-2'>{cart}</p>
                        <Link to="/cart"><CgShoppingCart size="24px" /></Link>
                    </div>
                </div>

                {/* Hamburger (mobile only) */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className="md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white"
                style={{ maxHeight: dropdownHeight }}
            >
                <div ref={dropdownRef} className="px-6 pb-6 text-center space-y-4 font-medium text-lg">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

                    <div className='flex justify-center gap-3 pt-2'>
                        <div className='border flex gap-2 rounded-full p-1 px-3 border-gray-400'>
                            <span>Abdul wasay</span><BiUser size="24px" />
                        </div>
                        <div className='flex rounded-full p-1 relative'>
                            <p className='absolute -top-2 left-4 text-sm bg-red-500 text-white rounded-full px-2'>{cart}</p>
                            <Link to="/cart"><CgShoppingCart size="24px" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
