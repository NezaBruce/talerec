import React from 'react'

const Cards = () => {
  return (
    <>
    <div className='p-6 max-w-sm mx-auto bg-black border-x-slate-800 rounded-xl flex space-x-4 mb-6'>
        <div className='shrink-0'>
            <img className='h-12 w-12 rounded-full' src='../../erin-lindford.jpg' alt='imag'/>            

        </div>
        <div>
        <div className='text-xl font-medium text-white'>Chitttui</div>
            <p className='text-slate-500'>
                you have new message loading
            </p>
        </div>
    </div>
    <p className='p-3 mx-auto text-center mb-10 font-bold text-black'>Another card</p>
    <div className='py-8 px-8 max-w-sm mx-auto bg-black rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <img src="../../erin-lindford.jpg" alt="woman" className='block h-24 mx-auto rounded-full sm:mx-0 sm:shrink-0'/>
        <div className='text-center space-y-2 sm:text-left'>
            <div className='space-y-0.5'>
                <p className='text-lg text-white font-semibold'>
                    Erin LindFord
                </p>
                <p className='text-slate-500 font-medium'>
                    Product owner
                </p>
            </div>
            <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-50 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
                Message
            </button>

        </div>


















    </div>

    </>
  )
}

export default Cards

