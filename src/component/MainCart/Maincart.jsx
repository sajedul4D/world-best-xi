import React from 'react';
import Player from '../Player/Player';

const Maincart = ({Players, handleSave,handleActive,isActive,save,}) => {
    return (
      <div>

<div className="flex justify-between items-center">
                <div>
                   <h2 className="font-bold text-2xl">Available Players</h2> 
                </div>
                <div>
                   <button onClick={()=>handleActive("cart")} className={` btn font-extrabold${isActive.cart ? "btn bg-[#E7FE29]" :"btn"}`}>Available </button>
                   <button onClick={()=>handleActive('about')}  
                    
                    className={` btn font-extrabold${isActive.cart ? "btn " :"btn bg-[#E7FE29]"}`}
                    >Selected({save.length})</button>
                   </div>
                   </div>


<div className='grid grid-cols-3 mt-10 gap-5'>
            {
                Players.map((player,idx)=><Player  key={idx} player={player}  handleSave={ handleSave} ></Player>)
            }
            
        </div>
      </div>
    );
};

export default Maincart;