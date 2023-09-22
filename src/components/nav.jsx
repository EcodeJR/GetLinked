import { useState } from "react";

{/*import Menu from '../assets/menu.svg'
import Close from '../assets/closeMenu.svg'
*/}
const Nav = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const SmallScreen = <>
        <div className='z-20 bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-xl h-fit w-screen text-white flex items-center justify-between absolute top-[100%] left-0 border-b-[1px] border-b-light-gray border-solid'>
            
            <div className=' w-full min-h-fit p-10 flex flex-col items-center justify-around bg-dark-purple md:hidden'>
                {/*
                <img src={Close} alt="Close button for menu" className='border-raduis-[100%] border-solid border-purple-gradient' />
                 */}
                <ul className='w-full h-full'>
                    <li className="font-bold text-xl py-1">
                        <a href="#">Timeline</a>
                    </li>
                    <li className="font-bold text-xl py-1">
                        <a href="#">Overview</a>
                    </li>
                    <li className="font-bold text-xl py-1">
                        <a href="#">FAQs</a>
                    </li>
                    <li className="font-bold text-xl py-1">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <button type="button">Register</button>
            </div>
            
            {/*
            <div>
                <img src={Menu} alt="Menu bar" className='h-4 w-4'/>
            </div>
                */}
        </div>
    </>

    return ( 
        <>
        <nav className="w-screen h-fit p-10 flex items-center justify-between relative">

            <div>
                <a href="#" className='text-white text-base font-bold'>get<span className='text-normal-purple'>linked</span></a>
            </div>
        <div className='hidden md:flex lg:flex md:items-center md:justify-around w-screen min-h-fit'>
                {/*
                <img src={Close} alt="Close button for menu" className='border-raduis-[100%] border-solid border-purple-gradient' />
                 */}
                <ul className='w-full h-full flex items-center justify-around text-white'>
                    <li>
                        <a href="#">Timeline</a>
                    </li>
                    <li>
                        <a href="#">Overview</a>
                    </li>
                    <li>
                        <a href="#">FAQs</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <button type="button">Register</button>
            </div>

        { click && SmallScreen }
        <button className="block sm:hidden transition text-white font-bold" onClick={handleClick}>
            {click ? "X" : "M"}
        </button>
        </nav>
        
        </>
     );
}
 
export default Nav;