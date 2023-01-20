import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {FiSettings} from 'react-icons/fi';


const Sidebar = ({children}) => {

  return (

    <div className='flex'>

        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'> 

            <div className='flex flex-col items-center'> 

                <Link href='/'>

                    <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>

                        <RxSketchLogo size={20}/>

                    </div>
                
                </Link>

                <span className='border-b-[1px] border-gray-200 w-full p-2'> </span>


                <Link href='/'>

                    <div className='bg-green-700 p-3 rounded-lg inline-block hover:bg-gray-200 cursor-pointer my-4'>

                        <RxDashboard size={20}/>

                    </div>
                
                </Link>


                <Link href='/Customers'>

                    <div className='bg-yellow-300 p-3 rounded-lg inline-block hover:bg-gray-200 cursor-pointer my-4'>

                        <RxPerson size={20}/>

                    </div>
                
                </Link>


                <Link href='/Orders'>

                    <div className='bg-red-600 p-3 rounded-lg inline-block hover:bg-gray-200 cursor-pointer my-4'>

                        <HiOutlineShoppingBag size={20}/>

                    </div>
                
                </Link>


                <Link href='/'>

                    <div className='bg-gray-100 p-3 rounded-lg inline-block hover:bg-blue-200 cursor-pointer my-4'>

                        <FiSettings size={20}/>

                    </div>
                
                </Link>

            </div>

            <div>

            </div>

        </div>

        <main className='ml-20 w-full'> {children} </main>

    </div>

  );

};

export default Sidebar;