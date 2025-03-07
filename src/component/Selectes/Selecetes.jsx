import React from 'react';
import Selected from '../AboutItem/Selected';

const Selecetes = ({save,handleActive,isActive,handleDelete}) => {

    
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                   <h2 className="font-bold text-2xl">Selected Players ({save.length}/13)</h2> 
                </div>
                <div>
                   <button onClick={()=>handleActive("cart")} className={` btn font-extrabold${isActive.cart ? "btn bg-[#E7FE29]" :"btn"}`}>Available </button>
                   <button onClick={()=>handleActive('about')}  
                    
                    className={` btn font-extrabold${isActive.cart ? "btn " :"btn bg-[#E7FE29]"}`}
                    >Selected({save.length})</button>
                   </div>
                   </div>
           <div>
            {
                save.map((item,idx)=><Selected key={idx} item={item} handleDelete={handleDelete}></Selected>)
            }
            
            </div> 
            <div onClick={()=>handleActive("cart")} className='w-[200px] border border-[#E7FE29] mt-8 mb-10  rounded-2xl '>
                <button className=' btn border rounded-2xl bg-[#E7FE29] font-bold p-3 m-2'>
                    Add More Player
                </button>

             </div>
        </div>
    );
};

export default Selecetes;