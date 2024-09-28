import React from 'react'
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import {Menu, X} from "lucide-react"
import { useState } from "react";

const Navbar = () => {

    const [mobileDraverOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDraverOpen);
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 p-4">
        <div className="container m-4 sm:m-0 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2 ml-0" src={logo} alt="logo" />
                    <span className="text-2xl tracking-tight">Namezar</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-8">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className="text-black-500 hover:text-blue-700">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center  ">
                    <a href="#" className="py-2 px-3 border border-blue-700  rounded-md flex-shrink-0 ml-4 ">
                        Sign In
                    </a>
                    <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md flex-shrink-0 text-white">
                        Create an account
                    </a>
                </div>
                <div className="lg:hidden  flex-col  justify-end mr-0 ">
                    <button onClick={toggleNavbar}>
                        {mobileDraverOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDraverOpen && (
                <div className="fixed right-0 z-20 bg-blue-700 text-white w-full p-8 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md flex-shrink-0">Sign In</a>
                        <a href="#" className="py-2 py-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800 flex-shrink-0 text-white">Create an account</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar;
