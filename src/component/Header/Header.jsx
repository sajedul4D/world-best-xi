import React from 'react';
import { TbCoinFilled } from "react-icons/tb";

const Header = ({coin,ToastContainer}) => {
    return (
        <div className='w-11/12 mx-auto mt-5'>
           <nav className='flex justify-between items-center'>
            <div>
            <img src="https://i.ibb.co.com/1DvRhx8/logo.png" alt="logo" border="0" />
            </div>
            <div >
                <ul className=" flex justify-center items-center gap-10 ">

                    <li className='font-bold ' href="">Home</li>
                    <li className='font-bold'  href="">Fixture</li>
                    <li className='font-bold'  href="">Teams</li>
                    <li className='font-bold'  href="">Schedules</li>
                   
                <button  className='btn flex justify-center items-center gap-2 border-2 border-gray-300  font-bold p-2  rounded-2xl'>{coin}M coin <span className='bg-amber-500 rounded-full'><ToastContainer position="top-center"
           reverseOrder={false}
       ></ToastContainer></span> </button>
               
                   
                </ul>
               


            </div>
            
            
            </nav> 
        </div>
    );
};

export default Header;