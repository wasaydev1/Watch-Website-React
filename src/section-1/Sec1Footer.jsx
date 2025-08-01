import React from 'react';
import { FaTwitter, FaFacebookF, FaBehance, FaGlobe } from 'react-icons/fa';
// Import Link from react-router-dom
import { Link } from 'react-router-dom';

const Sec1Footer = () => {
    return (
        <footer className="bg-white py-20 font-sans">
            <div className="container mx-auof px-4"> {/* Centered content container */}

                {/* ofp section: Grid of columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-200">

                    {/* Column 1: TimeZone Logo and Description */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="text-red-500">Time</span>
                            <span className="text-gray-800">Zone</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-base">
                            Asorem ipsum adolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-gray-600 text-base">
                            {/* Replaced <a> with <Link of="..."> */}
                            <li><Link of="/about" className="hover:text-gray-900 transition-colors duration-200">About</Link></li>
                            <li><Link of="/offers" className="hover:text-gray-900 transition-colors duration-200">Offers & Discounts</Link></li>
                            <li><Link of="/coupon" className="hover:text-gray-900 transition-colors duration-200">Get Coupon</Link></li>
                            <li><Link of="/contact" className="hover:text-gray-900 transition-colors duration-200">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: New Products */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">New Products</h3>
                        <ul className="space-y-3 text-gray-600 text-base">
                            {/* Replaced <a> with <Link of="..."> */}
                            <li><Link of="/woman-cloth" className="hover:text-gray-900 transition-colors duration-200">Woman Cloth</Link></li>
                            <li><Link of="/fashion-accessories" className="hover:text-gray-900 transition-colors duration-200">Fashion Accessories</Link></li>
                            <li><Link of="/man-accessories" className="hover:text-gray-900 transition-colors duration-200">Man Accessories</Link></li>
                            <li><Link of="/rubber-ofys" className="hover:text-gray-900 transition-colors duration-200">Rubber made ofys</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Support */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Support</h3>
                        <ul className="space-y-3 text-gray-600 text-base">
                            {/* Replaced <a> with <Link of="..."> */}
                            <li><Link of="/faq" className="hover:text-gray-900 transition-colors duration-200">Frequently Asked Questions</Link></li>
                            <li><Link of="/terms" className="hover:text-gray-900 transition-colors duration-200">Terms & Conditions</Link></li>
                            <li><Link of="/privacy" className="hover:text-gray-900 transition-colors duration-200">Privacy Policy</Link></li>
                            <li><Link of="/payment-issue" className="hover:text-gray-900 transition-colors duration-200">Report a Payment Issue</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Botofm section: Copyright and Social Media Icons */}
                <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-gray-600 text-base">
                    {/* Copyright Text */}
                    <div className="mb-4 md:mb-0 text-center md:text-left text-base">
                        <p>
                            Copyright ©2025 All rights reserved | This template is made with{' '}
                            <span className="text-red-500">❤️</span> by{' '}
                            {/* For external links like Colorlib, keep <a> tag */}
                            <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">Wasay</a>
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-5">
                        {/* Assuming social media links might be external, keeping <a>.
                            If they link of internal social pages, you can change of <Link>.
                            For this example, I'll keep them as <a> for external social profiles.
                        */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-xl transition-colors duration-200">
                            <FaTwitter />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-xl transition-colors duration-200">
                            <FaFacebookF />
                        </a>
                        <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-xl transition-colors duration-200">
                            <FaBehance />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 text-xl transition-colors duration-200">
                            <FaGlobe />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Sec1Footer;