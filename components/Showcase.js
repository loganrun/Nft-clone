import React from 'react'
import Card from './Cards'



function Showcase() {
  return (
    <section >
        <container className='grid grid-cols-1 mt-20'>
            <div className='text-center text-4xl mb-10 '>
                <h1>Top Big Heads!</h1>
            </div>
            <div className=' '> 
            <Card/>
            </div>
        </container>

    </section>
  )
}

export default Showcase