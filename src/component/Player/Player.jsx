import React from 'react';
import { CgProfile } from "react-icons/cg";
import { CiFlag1 } from "react-icons/ci";

const Player = ({player,handleSave}) => {
    const {name,image,role,battingType,bowlingType,Price,country}=player
    return (
        <div className='shadow-2xl p-5  space-y-2 rounded-2xl border-2 border-gray-400 mb-4'>
          <div>
          <img className='rounded-2xl' src={image} alt="" />
          <div className='mt-5 flex items-center gap-4 '><span className='text-4xl'><CgProfile></CgProfile></span> <span className='text-xl font-bold'>{name}</span>

          

          </div>
          <div className='flex justify-between items-center border-b-2 border-gray-400 p-2 '>
            <div className='flex items-center gap-2'>
                <p><CiFlag1></CiFlag1></p>
                <p  className='font-bold text-gray-400' >{country}</p>
            </div>
            <button className='btn border-b-2'>{role}</button>
          </div>
          <h2 className='font-bold mt-4'>Rating</h2>
          
            <div className='flex justify-between items-center'>
                <h2  className='font-bold'>{battingType}</h2>
                <h2  className='font-bold'>{bowlingType}</h2>
               

            </div>
            <div className="flex justify-between items-center mt-2">
            <h2 className='font-bold'> Price:{Price}</h2>
            <button onClick={()=>handleSave(player)} className='btn'>Choose Player
            </button>
            </div>
          
        
            
            

          </div>
        
        </div>
    );
};

export default Player;