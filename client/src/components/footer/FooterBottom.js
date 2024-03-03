import React from 'react';

function FooterBottom() {
  const BottomList = [
    { 
      id: 1028,
      title: "AbeBooks",
      des: "Books, art & collectibles",
    },
    { 
      id: 1029,
      title: "Amazon Web Services",
      des: "Scalable Cloud Computing Services",
    },
    { 
      id: 1030,
      title: "Audible",
      des: "Download Audio Books",
    },
    { 
      id: 1031,
      title: "IMDb",
      des: "Movies, TV & Celebrities",
    },
    { 
      id: 1032,
      title: "Shopbop",
      des: "Designer Fashion Brands",
    },
    { 
      id: 1033,
      title: "Amazon Business",
      des: "Everything For Your Business",
    },
    { 
      id: 1034,
      title: "Prime Now",
      des: "2-Hour Delivery on Everyday Items",
    },
    { 
      id: 1035,
      title: "Amazon Prime Music",
      des: "100 million songs, ad-free Over 15 million podcast episodes",
    }
  ];
  
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='w-full grid grid-cols-4 gap-3 place-content-center text-gray-400'>
          {
            BottomList.map((item) => (
              <div key={item.id} className='group cursor-pointer mx-auto'>
                <h3 className='w-24 font-semibold text-[12px] group-hover:underline text-[#DDD] leading-3 mb-2'>{item.title}</h3>
                <p className='w-24 tracking-tight text-[12px] text-[#999] group-hover:underline leading-3'>{item.des}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
