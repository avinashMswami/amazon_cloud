import React from "react"

export const FooterMData = ({footer_data})=>
{ return(
<div>
    <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {footer_data.head}
    </h3>
    <ul className="flex flex-col gap-2 font-bodyFont">
        {footer_data.rest.map((item, index) => (
        <li 
            key={index}
            className="text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150"
        >
            {item}
        </li>
        ))}
    </ul>
    </div>)}