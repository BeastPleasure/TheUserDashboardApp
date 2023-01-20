import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';

const customers = () => {

  return (

    <div className='bg-gray-100 min-h-screen'>

      <div className='flex justify-between p-4'>
        <h2>Customers</h2>
        <h2>Welcome Back, Clint</h2>
      </div>

      <div className='p-4'>

        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span className='md:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden md:grid'>Method</span>
          </div>

          <ul>

            {data.map((order, id) => (

                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    
                    <div className='flex items-center'>
                        
                        <div className='bg-purple-100 p-3 rounded-lg'>
                            <BsPersonFill className='text-purple-800' />
                        </div>

                        <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                    
                    </div>

                    <p className='text-gray-600 md:text-left md:ml-0 md:pl-0 sm:ml-12 sm:pl-8'>{order.name.first}@gmail.com</p>
                    <p className='hidden md:flex'>{order.date}</p>
                    
                    <div className='sm:hidden md:flex hidden justify-between items-center'>
                        <p>{order.method}</p>
                        <BsThreeDotsVertical />
                    </div>

                </li>
            ))}
          </ul>

        </div>

      </div>

    </div>

  );

};

export default customers;