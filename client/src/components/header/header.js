import React, { useState } from "react";
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { logo } from "../../assets/index";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderBottom from "./headerBottom";
const Header = ()=>{

  const [showAll, setShowAll] = useState(false);
  // console.log(showAll);
  const allItems = [
    {_id: 112, title: "Health & Household" },
{ id: 113, title: "Home & Kitchen" },
{_id: 114, title: "Industrial & Scientific" },
{_id: 115, title: "Kindle Store" },
{_id: 116, title: "Luggage" },
{_id: 117, title: "Men's Fashion" },
{_id: 118, title: "Movies & TV" },
{_id: 119, title: "Music, CDs & Vinyl" },
{_id: 120, title: "Pet Supplies" },
{_id: 121, title: "Prime Video" },
{_id: 122, title: "Software" },
{_id: 123, title: "Sports & Outdoors" },
{_id: 124, title: "Tools & Home Improvement" },
{_id: 125, title: "Toys & Games" },
{_id: 126, title: "Video Games" },
{_id: 127, title: "Women's Fashion" },
  ]

    return(
        <div >
          <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center top-0 left-0 ">    
                  {/* {================ Image  Starts Here =================}  */}
            <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            <img className="w-24 mt-2" src={logo} alt="Amazon_Image"/>
            </div>
            {/* {================ Image  Ends Here =================}  */}

            <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                <LocationOnSharpIcon />
                <p className="text-sm text-lightText font-light flex flex-col">Delivery? 
                <span className="text-sm font-semibold -mt-1 text-whiteText">Sign In</span></p>
            </div>
            <div className="h-10 rounded-md flex flex-grow relative">
              <span span onClick={()=>setShowAll(!showAll)} className="w-14 h-full bg-gray-200hover: bg-gray-300 border-2 cursor-point duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md cursor-pointer">All
                <span><ArrowDropDownTwoToneIcon />
                </span>
                { showAll&& (
                  <div>
                    <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue Otext-black p-2 flex-col gap-1 z-50">
                      {
                        allItems.map((item)=>(
                           <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200" key={item._id} >
                            {item.title}
                            </li>
                        ))
                      }
                    </ul>
                  </div>
                )

                }
                </span>
                <input className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
                type="text"                
                />
                <span className="w-12 h-full flex items-center justify-center Ibg-amazon_yellow hover: bg-[#f3a847] duratioh-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
                  <SearchSharpIcon />
                  </span>
            </div>

            <div className="pl-2 px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
              <p className="text-sm text-lightText font-light flex flex-col">Hello, Sign in 
                <span className="text-sm font-semibold -mt-1 text-whiteText">Accounts & Lists</span></p>
            </div>

            <div className="pl-3 flex flex-col items-start border border-transparent hover:border-white cursor-pointer duration-100">
              <p className="gap-1 text-xs text-lightText font-light flex flex-col">
                Returns <span className="text-xs font-semibold -mt-1 text-whiteText">& Orders</span>
              </p>
            </div>
          
          <div className="pl-3 flex flex-col items-start border border-transparent hover:border-white cursor-pointer duration-100 relative">
            <ShoppingCartIcon />
            <p className="text-xs text-lightText font-semibold ">Cart
              <span className="absolute top-0 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center" >0</span>
            </p>
          </div>
          
          
          
          
          
          
          
          </div>
                <HeaderBottom />
        </div>
    )
}

export default Header;




