import React from 'react'
import Carousel from './Carousel'


function About() {
  return (
    <section >
        <container className='flex-1 justify-center justify-items-center relative mt-10 '>
            <box> 
                <Carousel/> 
            </box>
            <box className='h-[10%] w-[10%]'>
                <p className='flex text-20 text-center '>
                    
                    What is Lorem Ipsum?
                    
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                    the leap into electronic typesetting, remaining essentially unchanged.
                    
                </p>
            </box>
        </container>

    </section>
  )
}

export default About

