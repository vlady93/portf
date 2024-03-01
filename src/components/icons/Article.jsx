import React from 'react'

const Article = (props) => {
    return (
        <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
            <path d="M7 8h10" />
            <path d="M7 12h10" />
            <path d="M7 16h10" />
        </svg>
    )
}

export default Article
