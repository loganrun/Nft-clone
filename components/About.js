import React from 'react'
import Carousel from './Carousel'


function About() {
  return (
    <section >
        <container className='grid grid-cols-1 mt-20 ml-10 '>
            <div className=' h-[100%] w-[100%]  '> 
                <Carousel/> 
            </div>
            <div className=''>
                <p className='capitalize text-2xl text-center pb-10 pt-10  '>
                    
                Welcome To The BigHead Boys Club.
                
                </p>
                    
                <p className='flex text-xl text-justify whitespace-normal '>     
                    The BigHead Boys Cub is a private collection of NFTs—unique digital collectibles. 
                    They are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.

                    With more than 200+ hand drawn traits, each NFT is unique and comes with a 
                    membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
                </p>   
                <div className='pt-10 pl-20'>
                    <button className="uppercase border px-4 py-1.5 rounded-full font-medium tracking-wide hover:bg-white hover:text-black transition duration-200">Join Our Discord</button>
                </div>
                
            </div>
        </container>

    </section>
  )
}

export default About

