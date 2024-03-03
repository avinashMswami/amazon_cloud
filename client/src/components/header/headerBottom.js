import React, { useEffect, useRef, useState } from 'react';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SideNavContent from './sideNavContent';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from 'framer-motion';
const HeaderBottom = () => {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef();
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      // console.log(e.target);
      if(e.target.contains(ref.current)){
        setShowAll(false);
      }
    })
  },[ref,showAll]) 
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/* ListItems Start here */}
      <ul className='flex items-center gap-2 text-sm tracking-wide'>
        <li onClick={() => { setShowAll(!showAll) }} className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <MenuSharpIcon />All
        </li>
        {
          showAll && (
            <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50 z-50">
    <div className="w-full h-full relative">
      <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}} className="w-[350px] h-full bg-white border border-black">
      <div className='w-full h-[10%] bg-amazon_light relative flex justify-center items-center cursor-pointer'>
        <p className='px-3 text-white'><AccountCircleSharpIcon /><span className='pl-2 text-lg'>Hello, sign in</span></p>
      </div>
      <div className='overflow-y-scroll overflow-x-hidden h-[calc(100vh-60px)]'>
        <SideNavContent title="Trending" one="Best Sellers" two="New Releases" three="Movers and Shakers" />
        <SideNavContent title="Shop by Category" one="Electronics" two="Men's Fashion" three="Women's Fashion" />
        <SideNavContent title="Programs & Features" one="Amazon Pay" two="Amazon LaunchPad" three="Handloom and Handicrafts" />
        <SideNavContent title="Help & Settings" one="Your Account" two="Customer Service" three="Sign In" />
      </div>
      <span onClick={() => setShowAll(false)} className="cursor-pointer absolute top-0 left-[355px] w-10 h-10 text-black
        flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
        <CloseIcon />
      </span>
    </motion.div>
  </div>
</div>

          
            
          )
        }
        <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">Today's Deals</li>
        <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">Customer Service</li>
        <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">Gift Cards</li>
        <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">Registry</li>
        <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">Sell</li>
      </ul>
    </div>
  );
}

export default HeaderBottom;
