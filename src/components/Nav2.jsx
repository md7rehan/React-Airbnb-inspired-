import logo from '../assets/images/logo.png';
import globe from '../assets/images/globe.png';


const Nav2 = () => {
  return (
   <nav>
    <div>
        <div className='mx-auto mt-5  max-w-7xl px-1 sm:px-1 lg:px-1'>
            <div className='flex h-10 items-center justify-between'>
                <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>

                    {/* logo */}
                    <a className='flex flex-shrink-0 items-center mr-12' href='/' >
                        <img className='h-8 w-auto'
                            src={logo} 
                            alt=""  
                        />
                    </a>
                    <div className='mx-auto pl-20 mt-2 font-Cereal'>
                        <div className='flex space-x-8 pl-20'>
                            <a href="/">Stays</a>

                            <a href="/">Experiences</a>

                            <a href="/">Online Experiences</a>
                        </div>
                    </div>
                    <div className='md:ml-auto  '>
                        <div className='flex space-x-3 items-center'>
                            <a className="flex flex-shrink-0 items-center mr-3" href="/">Airbnb your home</a>

                            <a className="flex flex-shrink-0 items-center mr-4 pr-3 " href="/">
                                <img 
                                    src={globe} 
                                    alt=""  
                                    className="h-5 w-5"
                                   
                                />
                            </a>

                            <a className="flex flex-shrink-0 items-center mr-4 border border-gray-300 rounded-full p-2 w-20 h-10" href="/">
                                <img
                                    src="https://img.icons8.com/material-rounded/24/000000/menu.png"
                                    alt="Menu Icon"                                    
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



   </nav>
  )
}

export default Nav2;