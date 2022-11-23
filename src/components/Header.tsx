import SwitchDarkMode from "./SwitchDarkMode"
import { useEffect, useState } from "react";
import Modal from "./Modal";
const Header = () => {
  const [modal, setModal] = useState(false)
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (modal === true) {

      document.getElementById("exampleModal")?.classList.remove("hidden");

    }
    else if (modal === false) {
      document.getElementById("exampleModal")?.classList.add("hidden");
    }


  }, [modal])

  const toggleModdle = () => {
    setModal(!modal)
  }
  const closeModal = () => { 
    setModal(false)
  }
const stickyOnScroll = () => { 
    const stickheader = document.getElementById("somena");
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
    <div className="z-10 relative" id="somena">
      <nav className="relative bg-primary dark:bg-bdark border-b border-yellow-100 dark:border-[#66584a]" id="navbar">

<div className="flex items-center justify-between p-4 gap-3">
  <div className="flex  md:order-3 order-2">
            <button
               onClick={toggleModdle}
              type="button" className="text-black dark:text-black dark:hover:text-black hidden lg:block md:block sm:hidden shadow uppercase md:text-lg bg-secondary dark:bg-yellow-200 hover:text-white  dark:hover:bg-secondary focus:ring-4 md:mr-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-1.5 text-center  md:mr-0 dark:bg-secondary  ">Join Us</button>
    <button data-collapse-toggle="navbar-cta" onClick={() => {
     toggleMenu();
    }} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <SwitchDarkMode/>
  </div>
          <a href="/" className="md:order-2 md:-ml-12  bg-logo1 dark:bg-logo2 bg-no-repeat bg-center w-60 bg-contain  mobile:bg-contain h-14 ">{ }</a>
  <div className={`${show ? "block" : "hidden"} items-center justify-between   md:flex  md:block md:order-1`} id="cta">
    <ul className="flex flex-col m-2 p-2 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8  md:mt-0 md:text-sm md:font-medium md:border-0   ">
      <li>
        <a href="/how-it-works" className="block  lg:text-lg uppercase  text-gray-700  rounded   md:p-0 dark:text-white dark:hover:text-secondary" aria-current="page">How It Works</a>
      </li>
      <li>
        <a href="/about-us" className="block  lg:text-lg   uppercase text-gray-700 rounded    md:p-0  dark:text-white  dark:hover:text-secondary ">About Us</a>
      </li>
    
    </ul>
  </div>
</div>
</nav>
      <Modal closeModal={ closeModal} />
    </div>

  )
}


export default Header
