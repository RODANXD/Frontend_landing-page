import React from 'react'
import asset5 from '../assets/asset5.png'
import asset6 from '../assets/asset6.svg'
import asset7 from '../assets/asset7.svg'
import { FaApple } from "react-icons/fa";

const Midpage = () => {
  return (
    <>
    <div className=' flex flex-col gap-24'>
    <div className=' flex flex-col text-black'>
        <div className=' flex flex-col items-center justify-center'>
            <span className=' uppercase'>testimonial</span>
            <h1 className=' font-extrabold'>What Our Users <br /> Says About Us</h1>
        </div>
        <div className=' flex items-center justify-center'>
            <div>
                <img src={asset5} alt="" />
            </div>
            <div className=' w-[25%] mx-40 gap-3 flex flex-col'>
                <span className=' font-extrabold text-2xl'>The Best Financial Accounting App Ever!</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae totam esse voluptatem, voluptates excepturi porro repellendus itaque quibusdam, doloribus temporibus nobis vero aut. Dignissimos iste earum dicta consequuntur voluptatem ipsum!</p>
                <img src={asset6} className='w-44' />
                <span className=' font-extrabold'> Nick Johns</span>
            </div>
        </div>
    </div>

    <div className=' text-black flex flex-col gap-6 mx-20'>
        <div className=' flex flex-col items-center justify-center'>
            <span className=' text-orange-600 text-lg'>FAQ</span>
            <h1 className=' font-extrabold'>Frequency Asked Question</h1>
        </div>
        <div className=' flex flex-col items-center justify-center '>
            <div className=' flex items-center justify-center'>
                <div className=' flex flex-col p-8 w-[35%] rounded-xl bg-red-500 text-white'>
                <span className=' text-xl font-extrabold'>The best financial accounting app ever!</span>
                <span>"Arcu at dictum mollis. vulputate Sit id accumsan
                    , ultricies, in ultrices malescaus eilt macheis
                </span>
                </div>

                <div className=' flex flex-col p-8 w-[35%] rounded-xl'>
                <span className=' text-xl font-extrabold'>The best financial accounting app ever!</span>
                <span>"Arcu at dictum mollis. vulputate Sit id accumsan
                    , ultricies, in ultrices malescaus eilt macheis
                </span>
                </div>
            </div>
            <div className=' flex items-center justify-center'>
                <div className=' flex flex-col p-8 w-[35%] rounded-xl'>
                <span className=' text-xl font-extrabold'>The best financial accounting app ever!</span>
                <span>"Arcu at dictum mollis. vulputate Sit id accumsan
                    , ultricies, in ultrices malescaus eilt macheis
                </span>
                </div>
                <div className=' flex flex-col p-8 w-[35%] rounded-xl bg-red-500 text-white'>
                <span className=' text-xl font-extrabold'>The best financial accounting app ever!</span>
                <span>"Arcu at dictum mollis. vulputate Sit id accumsan
                    , ultricies, in ultrices malescaus eilt macheis
                </span>
                </div>
            </div>
        
            <div className=' flex items-center justify-center'>
                <div className=' flex flex-col p-8 w-[35%] rounded-xl bg-red-500 text-white'>
                <span className=' text-xl font-extrabold'>The best financial accounting app ever!</span>
                <span>"Arcu at dictum mollis. vulputate Sit id accumsan
                    , ultricies, in ultrices malescaus eilt macheis
                </span>
                </div>
                <div className=' flex flex-col p-8 w-[35%] rounded-xl'>
                <span className=' text-xl font-extrabold'>The best financial accounting app ever!</span>
                <span>"Arcu at dictum mollis. vulputate Sit id accumsan
                    , ultricies, in ultrices malescaus eilt macheis
                </span>
                </div>
            </div>
        

        </div>

        <div className='h-40 w-44 blur-xl -bottom-44 relative left-18 -z-10' 
                style={{borderRadius: "30% 70% 70% 30% / 47% 30% 70% 53%",
            backgroundImage: "linear-gradient(#F00000, #DC281E)"
                }}></div>

    </div>
    <div className='flex items-start justify-center'>
    
    <div className=' flex bg-black text-white w-[80%] justify-between rounded-lg'>
        <div className=' flex flex-col items-start justify-center gap-2 px-20'>
            <h1>Ready To Get Started?</h1>
            <span>Risus leo egestaress Maurius Diam Eget morbie Tempus</span>

            <button className='flex items-center justify-center bg-white text-black w-44'>Download <FaApple className='size-6'/></button>


        </div>
        <div>
            <img src={asset7} alt="" />
        </div>
    </div>
    
    </div>



    </div>
    
    </>
  )
}

export default Midpage