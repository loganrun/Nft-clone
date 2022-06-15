import React from 'react'
import Image from 'next/image'
import BigPics from '../public/videos/Home GIF.gif'


const Home = () => {
  return (
    <section >

        {/* <p className=' flex text-6xl text-center mt-10 ml-20'> Tired of the same old NFTs?</p> */}

        <container className='grid grid-cols-1 '> 
            <div className=' w-full pb-10  '>
                <Image src={BigPics} w={40} h={40}/>
            </div>
            <div className='' >
            <p className='capitalize text-2xl text-center pb-5'> 
            Tired of the same old NFTs?</p>
                <p className='text-xl text-left pl-5 pr-5 '>
                    
What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
the leap into electronic typesetting, remaining essentially unchanged.

                </p>
            </div>
            

        </container>
        
    </section>
    
  )
}

export default Home

//grid-cols-2 gap-20 mt-40 ml-20 mr-20
// 'flex ml-20 mt-10 mr-20'
//capitalize flex text-sm text-center mt-10 ml-20 pb-10 pt-10