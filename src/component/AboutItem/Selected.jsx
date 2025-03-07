import React from 'react';
import { MdDelete } from "react-icons/md";

const Selected = ({item,handleDelete}) => {
    const {id,name,image,role}=item
    console.log("lonnjkfjsek",id);
   
    return (
        <div>
            <div className='mt-8 '>
             <div className='flex  justify-between items-center border-2 border-gray-400 p-4 rounded-2xl '>
                <div className='flex gap-5'>
                    <img className='w-[80px] h-[80px] mx-auto object-cover rounded-3xl' src={image} alt="" />
                    <div className='mt-2'>
                        <h2 className='font-bold text-xl'>{name}</h2>
                        <p className='text-gray-400'>{role}</p>
                    </div>
                </div>

                <button  onClick={()=>handleDelete(item.id)} className=' btn font-bold text-3xl text-red-500'><MdDelete onClick={()=>handleDelete(id)}></MdDelete></button>
             </div>
             
        </div>
        
        </div>
    );
};

export default Selected;