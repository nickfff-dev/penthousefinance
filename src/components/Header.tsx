import SwitchDarkMode from "./SwitchDarkMode"
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
    <nav className="z-10 bg-primary dark:bg-black border-b border-yellow-100 " id="navbar">

      <div className="md:mx-5 flex items-center justify-between p-4 ">
        <div className="flex md:order-3 order-2 justify-between">
          <button type="button" className="text-black dark:text-black dark:hover:text-black  shadow uppercase md:text-lg bg-secondary dark:bg-yellow-200 hover:text-white  dark:hover:bg-secondary focus:ring-4 md:mr-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-1.5 text-center  md:mr-0 dark:bg-secondary  ">Join Us</button>
          <button data-collapse-toggle="navbar-cta" onClick={() => {
           toggleMenu();
          }} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <SwitchDarkMode/>
        </div>
        <a href="https://flowbite.com/" className=" md:-ml-20  md:order-2 items-start ">
       <img src="https://penthouse.finance/wp-content/uploads/2022/05/Penthouse_banner1-300x48.png" className="h-6 mr-3 sm:h-12 dark:bg-white dark:p-1" alt="Flowbite Logo" />
     
         </a>
        <div className={`${show ? "block" : "hidden"} items-center justify-between  w-full md:flex md:w-auto md:block md:order-1`} id="cta">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8  md:mt-0 md:text-sm md:font-medium md:border-0   ">
            <li>
              <a href="/" className="block  text-lg uppercase  text-gray-700  rounded   md:p-0 dark:text-white dark:hover:text-secondary" aria-current="page">How It Works</a>
            </li>
            <li>
              <a href="/" className="block  text-lg   uppercase text-gray-700 rounded    md:p-0  dark:text-white  dark:hover:text-secondary ">About Us</a>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>

  )
}


export default Header
