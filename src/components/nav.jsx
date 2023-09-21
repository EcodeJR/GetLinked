import Menu from '../assets/menu.svg'

const nav = () => {
    return ( 
        <>
        <div className='z-20 bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-xl h-full w-full text-white flex items-center justify-between py-4'>
            <div><a href="#" className='text-dark-purple'>get<span>linked</span></a></div>
            <div>
                <ul>
                    <li>
                        <a href="#">getlinked</a>
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
            <div>
                <img src={Menu} alt="Menu bar" className='h-4 w-4'/>
            </div>
        </div>
        </>
     );
}
 
export default nav;