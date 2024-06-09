import React from 'react'
import asset1 from '../assets/asset1.svg'
import downhero from'../assets/downhero.svg'
import asset2 from '../assets/asset2.svg'
import asset3 from '../assets/asset3.png'
import asset4 from '../assets/asset4.png'
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { SlStar } from "react-icons/sl";

const Landingpage = () => {
  return (
    <>
    <div className=' flex flex-col'>
    <div className='h-40 w-44 blur-xl top-28 absolute left-[500px] -z-10' 
    style={{borderRadius: "30% 70% 70% 30% / 47% 30% 70% 53%",
        backgroundImage: "linear-gradient(#F00000, #DC281E)"
     }}></div>

     <div className=' flex px-36'>
        <div className=' flex flex-col'>
            <div className=' text-black flex flex-col gap-6'>
                <h1 className=' text-6xl font-extrabold capitalize'> Make the best financial descision</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat enim, nulla eos reprehenderit
                     tempora fuga ratione, sapiente doloribus consequuntur illo aliquid nisi error quasi ea, totam numquam.</p>

                <div className=' flex gap-5 text-white'>
                    <button className='bg-black w-40 rounded-md'>Get started</button>
                    <button className=' bg-transparent text-black flex items-center gap-2'> 
                        <MdOutlinePlayCircle className=' size-8'/> Watch videos</button>
                </div>
                 <div>
                    <img src={downhero} alt="" />
                </div>
            </div>

        </div>
        <div>
            <img src={asset1} alt="" className=' w-screen h-full' />
        </div>
     </div>

     <div className=' flex flex-row'>
        <div>
            <img src={asset2} alt="" className='w-[90vw]' />
        </div>
        <div className=' flex flex-col text-gray-950 justify-center mx-20 gap-4'>
            <span className=' text-orange-600 text-lg font-bold'>Feature</span>
            <h1>Urfi Preminum</h1>
            <div className=' flex flex-col text-gray-950 gap-2'>
                <span className=' flex items-center text-lg gap-2 font-bold'> <SlStar className='text-orange-600'/> Bugeting Intervals</span>
                <p className=' text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quia voluptas mollitia 
                    fuga magni porro molestias sapiente eum, debitis iusto .</p>
                <span className=' flex items-center text-lg gap-2 font-bold'> <SlStar className='text-orange-600'/> Bugeting Intervals</span>
                <p className=' text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quia voluptas mollitia 
                    fuga magni porro molestias sapiente eum, debitis iusto .</p>
                <span className=' flex items-center text-lg gap-2 font-bold'> <SlStar className='text-orange-600' /> Bugeting Intervals</span>
                <p className=' text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quia voluptas mollitia 
                    fuga magni porro molestias sapiente eum, debitis iusto .</p>
            </div>
            {/* <div className='h-40 w-44 blur-xl bottom-[-700px] absolute left-[93%] -z-10' 
                style={{borderRadius: "30% 70% 70% 30% / 47% 30% 70% 53%",
            backgroundImage: "linear-gradient(#F00000, #DC281E)"
                }}></div> */}
        </div>


     </div>


    
     <div className=' flex flex-row justify-between w-full'>
        
        <div className=' flex flex-col text-gray-950 justify-center w-[40%] mx-20 gap-4'>
            <span className=' text-orange-600 text-lg font-bold'>Advantage</span>
            <h1 className=' font-extrabold'>Why choose Uifry?</h1>
            <div className=' flex flex-col text-gray-950  gap-2'>
                <span className=' flex items-center gap-2 text-xl font-bold'> <IoNotificationsCircle className=' size-10 text-orange-600'/> Clear Notifiaction</span>
                <p className=' text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quia voluptas mollitia 
                    fuga magni porro molestias sapiente eum, debitis iusto
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quia voluptas mollitia 
                    fuga magni porro molestias sapiente eum, debitis iusto
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quia voluptas mollitia 
                    fuga magni porro molestias sapiente eum, debitis iusto .</p>
            </div>
        </div>

        <div>
            <img src={asset3} alt="" className='w-[40vw]' />
        </div>


     </div>
     <div className=' flex flex-row justify-between w-full'>

     <div>
            <img src={asset4} alt="" className='' />
        </div>
        
        <div className=' flex flex-col text-gray-950 justify-center w-[40%] mx-20 gap-4'>
            <div className=' flex flex-col text-gray-950  gap-2'>
                <span className=' flex items-center gap-2 text-2xl font-bold'> <IoStarOutline className=' size-8 text-orange-600'/> Fully customizable</span>
                <p className=' text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quia voluptas mollitia 
                    fuga magni porro molestias sapiente eum, debitis iusto
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quia voluptas mollitia 
                    fuga magni porro molestias sapiente eum, debitis iusto
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quia voluptas mollitia 
                    fuga magni porro molestias sapiente eum, debitis iusto .</p>
            </div>
        </div>



     </div>
     

    </div>

    </>
  )
}

export default Landingpage