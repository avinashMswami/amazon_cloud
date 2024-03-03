


const SideNavContent = ({title,one,two,three})=>{
    return(
        <div className='flex-col'>
            {/* Parent div for wrapping the ul elements */}
            <div className="flex-col">
                {/* First set of list items */}
                <ul className="relative w-full bg-white border-transparent flex-col" >
                <li className='tracking-wide font-semibold text-lg py-3 pl-10'>{title}</li>
                <li className='tracking-wide py-3 font-light hover:bg-gray-300 pl-10 cursor-pointer'>{one}</li>
                <li className='tracking-wide font-light  py-3 pl-10 cursor-pointer hover:bg-gray-300'>{two}</li>
                <li className='tracking-wide font-light py-3 pl-10 cursor-pointer hover:bg-gray-300 border-b-[1px] border-b-gray-300'>{three}</li>
                </ul>

                {/* Second set of list items */}
                
            </div>
        </div>
    );

}

export default SideNavContent;