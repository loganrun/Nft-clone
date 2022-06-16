import React from 'react'
import Card from './Cards'
import Image from 'next/image'
import BigPics1 from '../public/images/bighead.svg'




function Showcase() {
  return (
    <section >
        <container className='grid grid-col-1 mt-20'>
            <div className='text-center text-4xl mb-10 '>
                <h1>Top Big Heads!</h1>
            </div>
            <div className='grid gap-4 grid-cols-3  p-5 '> 
            {/* <Card/> */}
            <div className=' w-full shadow-lg shadow-[#1199FA] border-0 '>
              <Image className='bg-white' src={BigPics1} w={40} h={40}/>
              <div className='grid grid-cols-2'>
                <div>
                    <span className='text-sm '>BigHeads!</span> <br/>
                    <h1>#5</h1>
                </div>
                <div>
                    <span className='text-sm text-right '>Price</span>
                    <h1>$65</h1>
                </div>
            </div>
            </div>
            <div className=' w-full shadow-lg shadow-[#1199FA] border-0 '>
              <Image src={BigPics1} w={40} h={40}/>
            </div>
            <div className=' w-full shadow-lg shadow-[#1199FA] border-0 '>
              <Image src={BigPics1} w={40} h={40}/>
            </div>
            <div className=' w-full shadow-lg shadow-[#1199FA] border-0 '>
              <Image src={BigPics1} w={40} h={40}/>
            </div>
            <div className=' w-full shadow-lg shadow-[#1199FA] border-0 '>
              <Image src={BigPics1} w={40} h={40}/>
            </div>
            </div>
        </container>

    </section>
  )
}

export default Showcase