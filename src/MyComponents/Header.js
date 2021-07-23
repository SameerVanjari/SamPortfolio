import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
        <nav className="text-white bg-dark body-font">
            <div className="container mx-auto flex flex-wrap p-1 ps-5 pe-5 flex-col md:flex-row items-center">
                <Link className="flex title-font font-medium items-center text-white mb-2 md:mb-0" to="/">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                   <img src={logo} height={100} width={55} />
                    <span className="ml-3 text-xl fs-2" style={{fontFamily: "'Arizonia', cursive"}} >Sameer Vanjari</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-white" to="/">Home</Link>
                    <Link className="mr-5 hover:text-white" to='/about'>About</Link>
                    <Link className="mr-5 hover:text-white" to='/portfolio'>Portfolio</Link>

                </nav>
               
            </div>
        </nav>
</>

    );
}
