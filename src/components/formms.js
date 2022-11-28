import React from 'react'

const Formms = () => {
  return (
    <div>
        <div className='max-w-sm items-center mx-auto mt-7'>
       <form action="">
        <label htmlFor="" className="block">
        <span
        className='block text-sm font-medium text-slate-700'>
            username
        </span>
        </label>
        <input type="text" value="tbone"  
        className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
        rounded-md text-sm shadow-sm placeholder-slate-400 
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600 
        focus:invalid-boder-ping-500 focus:invalid:ring-pink-500
        '/>

        <label htmlFor="" className='block mb-4'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
            </span>
            <input type="email" name="email" id="" className='mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeolder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 placeholder="me@gm.co.com"'/>
        </label>

       </form>
        </div>
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl  mb-3 mt-5'>
            <div className='md:flex'>
                    <div className='md:shrink-0'>
                       <img src="../../erin-lindford.jpg" alt=""   className='h-48 w-full object-cover md:h-full md:w-40'/> 
                    </div>
                    <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                            Retreats      </div>
                            <a href="/" className='block mt-1 tetx-lg leading-tight font-medium text-black hover:underline'>Incredible accomodation for your team</a>
                            <p className='text-slate-500'>Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
            </div>
        </div>
    </div>
  )
}
    
export default Formms

