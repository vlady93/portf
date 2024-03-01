import Link from 'next/link'
import React from 'react'

export const NavLink = ({ label, link = '#', action }) => {
    if (link.includes('#'))
        return (
            <a
                href={link}
                className="relative overflow-hidden z-10 p-2  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-yellow-500 before:backdrop-blur-lg before:rounded-lg  rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300 text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50"
            >
                {label}
            </a>
        )
    return (
        <Link
            href={link}
            className="relative overflow-hidden z-10 p-2  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-yellow-500 before:backdrop-blur-lg before:rounded-lg  rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300 text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50"
            onClick={action}
        >
            {label}
        </Link>
    )
}
