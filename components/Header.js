import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header className='bg-[#0B1426] h-[72px] flex items-center px-10 md:px-12'>
        <Image src='/images/bighead-4.svg' width={60} height={60} className = 'rounded-full cursor-pointer' />
        <div className='hidden ml-10 md:flex items-center space-x-6 '>
            <a className='flex items-center space-x-2 cursor-pointer'>Home</a>
        </div>
        <div className='hidden ml-10 md:flex items-center space-x-6 '>
            <a className='flex items-center space-x-2 cursor-pointer'>About</a>
        </div>
        <div className='hidden ml-10 md:flex items-center space-x-6 '>
            <a className='flex items-center space-x-2 cursor-pointer'>Roadmap</a>
        </div>
        <div className='hidden ml-10 md:flex items-center space-x-6 '>
            <a className='flex items-center space-x-2 cursor-pointer'>Showcase</a>
        </div>
        <div className='hidden ml-10 md:flex items-center space-x-6 '>
            <a className='flex items-center space-x-2 cursor-pointer'>Team</a>
        </div>
        <div className='hidden ml-10 md:flex items-center space-x-6 '>
            <a className='flex items-center space-x-2 cursor-pointer'>Faq</a>
        </div>
        <div>
        <button className="rounded-full bg-white space-x-2 ml-8 text-[#0B1426] px-4 py-1 hover:bg-slate-400">Connect Wallet</button>
        </div>

    </header>
  )
}

export default Header