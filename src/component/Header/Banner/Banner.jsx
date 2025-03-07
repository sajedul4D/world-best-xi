import React from 'react';


const Banner = ({handleClaim}) => {
  
    return (
     
        <div className='w-11/12 mx-auto mt-10   '>
        
            <div className='bg-[url(https://i.ibb.co.com/GQ80QK2W/bg-shadow.png)] bg-black rounded-2xl  flex items-center justify-center'>
            <div className=' text-center '>

               <div className='flex items-center justify-center mt-14 ' >
               <img  src="https://i.ibb.co.com/1Y0DK749/banner-main.png" alt="" />
               </div>
                <h2 className='text-4xl text-white font-extrabold mt-10'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-gray-400 text-xl font-semibold mt-8'>Beyond Boundaries Beyond Limits</p>
              <div className='w-[200px] border border-[#E7FE29] mt-8 mb-10 mx-auto  rounded-2xl '>
                <button onClick={handleClaim} className=' btn border rounded-2xl bg-[#E7FE29] font-bold p-3 m-2'>claim free Credit
                <span ></span>
               
                </button>
                
                
               

              </div>
            </div>
          

            </div>
            
        </div>
    );
};

export default Banner;