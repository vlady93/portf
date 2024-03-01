'use client'
import { useRef, useState } from 'react'
import { NavLink } from './NavLink'
import { FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa'
import { ThemeSwitch } from './ThemeSwich'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
    const navRef = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const showNavBar = () => {
        navRef.current.classList.toggle('hidden')
        setIsOpen(!isOpen)
    }
    return (
        <header className="backdrop-blur-md bg-dark-200/30 dark:bg-dark-900/30 fixed w-full z-20 top-0 left-0">
            <nav className="container px-2 lg:max-w-[800px] flex flex-wrap items-center justify-between mx-auto py-4 ">
                <Link
                    href="/"
                    className="flex gap-2 items-center self-center text-3xl font-black whitespace-nowrap text-primary-600 dark:text-primary-400"
                >
                    <Image src={'/images/logoweb.png'} width={80} height={40} alt="logo" /> 
                
                </Link>
                <div className="md:order-2">
                    <ul className="hidden md:flex md:space-x-8 items-center ">
                        <li>
                            <a
                                href="https://linkedin.com/in/vladimir-huanca-cruz"
                                target="_blank"
                                className="text-dark-700 hover:text-dark-500 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
                                aria-label="Visit my LinkedId profile"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/vlady93"
                                target="_blank"
                                className="text-dark-700 hover:text-dark-500 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
                                aria-label="Visit my Github profile"
                            >
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <ThemeSwitch />
                        </li>
                    </ul>
                    <div className="flex items-center">
                        <ThemeSwitch show={false} />
                        <button
                            className="p-2 text-sm text-dark-700 dark:text-dark-200 rounded-lg md:hidden"
                            onClick={showNavBar}
                        >
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    ref={navRef}
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 transition-all duration-500"
                >
                    <ul className="flex flex-col gap-6 p-4 md:p-0 mt-4 font-medium  md:flex-row  md:mt-0 md:border-0 ">
                        <li className="text-center">
                            <NavLink label={'Proyectos'} link={'/projects'} action={showNavBar} />
                        </li>
                        <li className="text-center">
                            <NavLink label={'Experiencia'} link={'/#experience'} action={showNavBar} />
                        </li>
                        
                    </ul>
                    <ul className="flex justify-center space-x-8 my-4 md:hidden">
                        <li>
                            <a
                                href="https://linkedin.com/in/vladimir-huanca-cruz"
                                className="text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
                                target="_blank"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/vlady93"
                                className="text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
                                target="_blank"
                            >
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
                            >
                                <FaYoutube />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
