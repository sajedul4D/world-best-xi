import React from 'react';

const Footer = () => {
    return (
       <div className='bg-black mt-[400px] '>
         <div className='    border-b-2 border-green-500 p-30 '>
            
            <div className='relative bottom-[350px] '>
            <div className=' w-11/12 mx-auto border-2 p-5 text-center bg-white/30 backdrop-invert backdrop-opacity-10  rounded-2xl'>
   
   <div className=' bg-[url(https://i.ibb.co.com/GQ80QK2W/bg-shadow.png)]  bg-white flex items-center justify-center rounded-2xl '>
   <div className='mt-24  mb-14'>
      <h2 className='text-3xl font-extrabold mt-5'>Subscribe to our Newsletter</h2>
      <p className='text-gray-400 font-semibold mt-5 '>Get the latest updates and news right in your inbox!</p>
      <div className='flex gap-4 p-10 text-center  '>
      <input className='font-bold border border-gray-400 w-[400px] p-2 rounded-2xl' type="text" placeholder='Enter Your Email' />
      <button className="btn rounded-2xl p-5 bg-gradient-to-r from-pink-400 via-orange-400 to-orange-300 ">Subscribe</button>
      </div>
   </div>
  
  
   </div>
  
   </div>
  
  
  
            </div>
          
              <div className='w-11/12 mx-auto text-white mb-20'>
  
              <div className='flex items-center justify-center'>
                  <img src="https://i.ibb.co.com/Xf1g0V9h/logo-footer.png" alt="" />
              </div >
              <div className='grid grid-cols-3 mt-14'>
              <div className='space-y-5'>
                  <h2 className='font-extrabold text-xl'>About</h2>
                  <p className="text-gray-400">
                  We are a passionate team <br /> dedicated to providing the best <br />services to our customers.
                  </p>
                 
                  
                  </div>
                  <div className='space-y-5'>
                      <h2 className='font-extrabold text-xl'>Quick Links</h2>
                      <ol className='space-y-3'>
                      <li> . Home</li>
                      <li> . Services</li>
                      <li> . About</li>
                      <li> . Contact</li>
                  </ol>
                  </div>
                  <div className='space-y-5'>
                     <h2 className='font-extrabold text-xl'>Subscribe</h2>
                     <p className='text-gray-400'>Subscribe to our newsletter for the <br /> latest updates.</p>
                     <div className='flex   '>
      <input className='font-bold border border-gray-400 w-[400px] p-2 rounded-2xl' type="text" placeholder='Enter Your Email' />
      <button className="btn rounded-2xl p-5 bg-gradient-to-r from-pink-400 via-orange-400 to-orange-300 ">Subscribe</button>
      </div>
                  </div>
  
              </div>
              
  
  
              </div>
            
              
              </div>
              <div className='text-center text-white'>
                <h2 className='mt-20  font-bold text-xl '>@2025 Tach_tah Your Company All Rights Reserved</h2>
                
              </div>
            

       </div>
       
    );
};

export default Footer;