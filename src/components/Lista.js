import React from 'react';

const Lista = ()=>{
    const people =[
        {
            name:"bruce",
            email:"bruce@gmail.com",
            imurl:"../../erin-lindford.jpg"
        },
        {
            name:"david",
            email:"david@gmail.com",
            imurl:"../../erin-lindford.jpg"
        },
        {
            name:"james",
            email:"james@gmail.com",
            imurl:"../../erin-lindford.jpg"
        },
        {
            name:"cooper",
            email:"cooper@gmail.com",
            imurl:"../../erin-lindford.jpg"
        },
    ]
return (
    <div className='max-w-sm mx-auto shadow-xl bg-white'>
    <ul className=' p-6 divide-y divide-black-200'>
       {
       people.map((person)=>(
        <div key={person.email}>
            <li className='flex py-4 first:pt-0 last:pb-3 mb-2'>
                <img src={person.imurl} alt="" className='h-10 w-10 rounded-full'/>
                <div className='ml-3 overflow-hidden'>
                    <p className='text-sm font-medium text-slate-900'>
                        {person.name}
                    </p>
                    <p className="text-sm text-slate-500 truncate">{person.email}</p>
                </div>
            </li>
        </div>
       ))       
       } 
    </ul>
    <ul>
        
    </ul>
    </div>
)
}
export default Lista;
