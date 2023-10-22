import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] max-auto p-4 py-12 grid md:grid-cols-3  gap-6'>
        {/* {cards} */}

        <div className='rounded-xl relative'>
            {/* {overlay} */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
       <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
       <p className='px-2'>Through 8/26</p>
       <button className='border-white bg-white mx-2 absolute button-4 text-black'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src='https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' />
        </div>

          {/* {cards} */}

          <div className='rounded-xl relative'>
            {/* {overlay} */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
       <p className='font-bold text-2xl px-2 pt-4'>New Restarunts</p>
       <p className='px-2'>Through 8/26</p>
       <button className='border-white bg-white mx-2 absolute button-4 text-black'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src='https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' />
        </div>
          {/* {cards} */}

          <div className='rounded-xl relative'>
            {/* {overlay} */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
       <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts</p>
       <p className='px-2'>Through 8/26</p>
       <button className='border-white bg-white mx-2 absolute button-4 text-black'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' />
        </div>
    </div>
  )
}

export default HeadlineCards