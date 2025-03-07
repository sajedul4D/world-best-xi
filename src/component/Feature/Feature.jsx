
import Maincart from "../MainCart/Maincart";
import Player from "../Player/Player";

import Selecetes from "../Selectes/Selecetes";


const Feature = ({Players,handleActive,isActive, handleSave,save,handleDelete }) => {
    
    
    return (
        <div className='w-11/12 mx-auto mt-20'>


            
                      <div>
                      {
                     isActive.cart ? <Maincart  save={save} isActive={isActive} handleActive={handleActive}  handleSave={ handleSave} Players={Players}></Maincart>:
                     <Selecetes  save={save} isActive={isActive} handleActive={handleActive} handleDelete={handleDelete}></Selecetes>
                        
                      }
                      </div>

              

            
            
           
           
        </div>
    );
};

export default Feature;