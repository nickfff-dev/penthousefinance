
import { useEffect, useState } from "react";


const Header = () => {
  const [show, setShow] = useState(false);
const stickyOnScroll = () => { 
    const stickheader = document.querySelector('nav');
    const sticky = (stickheader as any)?.offsetTop

    window.addEventListener('scroll', () => {
      if (window.scrollY > sticky) {
   
        stickheader?.classList.add('sticky');
        stickheader?.classList.add('top-0');
        stickheader?.classList.add('bg-white');
        stickheader?.classList.remove('bg-primary')

        stickheader?.classList.remove('border-b')


        


      }
      else { 
   
  
        stickheader?.classList.remove('sticky');
        stickheader?.classList.remove('top-0');
        stickheader?.classList.remove('bg-white');
        stickheader?.classList.add('border-b')
        stickheader?.classList.add('bg-primary')

 
      }
     })



  }

  useEffect(() => { 
    stickyOnScroll();
  }, [])


  const toggleMenu = () => { 

    setShow(!show)
    console.log(show)
  }
  return (
    <nav className="bg-primary  border-b border-black" id="navbar">

      <div className="md:mx-5 flex items-center justify-between p-4 ">
        <div className="flex md:order-3 order-2 justify-between">
          <button type="button" className="text-black hover:text-secondary shadow uppercase md:text-lg bg-secondary hover:bg-black focus:ring-4 md:mr-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-1.5 text-center  md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Us</button>
          <button data-collapse-toggle="navbar-cta" onClick={() => {
           toggleMenu();
          }} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <a href="https://flowbite.com/" className=" md:-ml-20  md:order-2 items-start ">
       <img src="https://penthouse.finance/wp-content/uploads/2022/05/Penthouse_banner1-300x48.png" className="h-6 mr-3 sm:h-12" alt="Flowbite Logo" />
     
         </a>
        <div className={`${show ? "block" : "hidden"} items-center justify-between  w-full md:flex md:w-auto md:block md:order-1`} id="cta">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8  md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block  text-lg uppercase  text-gray-700  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">How It Works</a>
            </li>
            <li>
              <a href="/" className="block  text-lg   uppercase text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>

  )
}


export default Header
