import React from 'react'
import Image from 'next/image'
import BigPics from '../public/videos/Home GIF.gif'


const Home = () => {
  return (
    <section >

        {/* <p className=' flex text-6xl text-center mt-10 ml-20'> Tired of the same old NFTs?</p> */}

        <container className='flex ml-20 mt-10 mr-20'>
            <box className='box-content h-[40%] w-[40%] mr-20' >
            <p className=' capitalize flex text-7xl text-center mt-10 ml-20 '> Tired of the same old NFTs?</p>
                <p className='flex text-2xl text-center '>
                    
What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
the leap into electronic typesetting, remaining essentially unchanged.

                </p>
            </box>
            <box className='box-content h-[30%] w-[40%]'>
                <Image src={BigPics} w={40} h={40}/>
            </box>

        </container>
        
    </section>
    
  )
}

export default Home