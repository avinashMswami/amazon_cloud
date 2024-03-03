import React from 'react';
import { FooterMData } from './FooterMData';
import logo from "../../assets/logo.png";
function FooterMiddle() {
  const bottomData = [
    'Australia', 'Brazil', 'Canada', 'China', 'France', 'Germany', 'Italy', 
    'Japan', 'Mexico', 'Netherlands', 'Poland', 'Singapore', 'Spain', 'Turkey'
  ];
  const footer_data1 = {
    head: "Get to Know Us",
    rest: ["About", "Careers", "Press Releases", "Amazon Science"]
  };

  const footer_data2 = {
    head: "Connect with Us",
    rest: ["Facebook", "Twitter", "Instagram"]
  };

  const footer_data3 = {
    head: "Make Money with Us",
    rest: [
      "Sell on Amazon",
      "Sell under Amazon Accelerator",
      "Protect and Build Your Brand",
      "Amazon Global Selling",
      "Become an Affiliate",
      "Fulfilment by Amazon",
      "Advertise Your Products",
      "Amazon Pay on Merchants"
    ]
  };

  const footer_data4 = {
    head: "Let Us Help You",
    rest: [
      "COVID-19 and Amazon",
      "Your Account",
      "Returns Centre",
      "100% Purchase Protection",
      "Amazon App Download",
      "Help"
    ]
  };

  return (
    <div className="w-full bg-amazon_light text-white">
      {/* ============ Top Start here ================== */}
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300 grid grid-cols-4 pl-4">
          <FooterMData footer_data={footer_data1} />
          <FooterMData footer_data={footer_data2} />
          <FooterMData footer_data={footer_data3} />
          <FooterMData footer_data={footer_data4} />
        </div>
      </div>
      { /* ============ Top End here ====================
{ /* ============ Bottom Start here =============== */}
<div className="w-full py-6 flex flex-col">
<div className='flex items-center justify-center gap-6 mb-4'>
<div>
<img className="w-20 pt-3 cursor-pointer" src={logo} alt="logo" />
</div>
<div className="flex gap-2">
<p className="flex gap-1 items-center justify-center border
hover: border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
English
</p>
</div>
</div>
<div className='flex mx-auto gap-4'>
  {bottomData.map((item, index) => (
    <p key={index} className='text-center text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>{item}</p>
  ))}
</div>

</div>
{ /* ============ Bottom End here ================= */}
    </div>
  );
}

export default FooterMiddle;
