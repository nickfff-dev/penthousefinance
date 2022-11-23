import SwitchDarkMode from "./SwitchDarkMode"
import { useEffect, useState } from "react";
const Modal = (props: any) => { 
  
  
  return (
    <div className="modal  fade fixed top-0 left-0 right-0 z-20 mx-auto w-[1000px]  w-1/2 h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog relative w-auto pointer-events-none">
    <div
      className="modal-content px-12  border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-modalbg bg-center bg-cover outline-none text-current">
      <button type="button" onClick={props.closeModal} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-3xl font-medium text-primary ">Be the first to co-invest with Penthouse</h3>
             
              <h3 className="mb-4 text-xl font-medium text-primary">Our investment opportunities go fast. Reserve your seat now to avoid missing out.</h3>
              <hr className="mb-5 "/>
              <form className="space-y-6" action="#">
                <div>
                  <p  className="text-primary">What is your experience with rental property investing?</p>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault1">
                      I'm just getting started
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault2">
                      I have purchased investment property before
                    </label>
                  </div>
                </div>

                <div>             <p  className="text-primary">How much are you looking to invest (BUSD)?</p>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault1">
                      Less than 5,000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault2">
                      5,001 – 10,000
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault2">
                      10,001 – 20,000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault2">
                      20,001 – 50,000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault2">
                      Above 50,000
                    </label>
                  </div>

                </div>

                <div>
                  <p  className="text-primary">How soon would you like to invest?</p>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault1">
                      Less than 30 days
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault2">
                      1 – 3 months
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault2">
                      3 – 6 months
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault2">
                      More than 6 months
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-primary">What is your risk tolerance?</p>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault1">
                    Lower risk and lower return potential
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault2">
                    Moderate risk and moderate return potential
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault2">
                    Higher risk and high return potential
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-primary bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label inline-block text-primary" htmlFor="flexRadioDefault2">
                    Not sure
                    </label>
                  </div>
                </div>
                 <div>
                 
                  <input type="email" name="email" id="email" className="bg-transparent border-b border-secondary placeholder-primary text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="name@company.com" required />
                </div>
                <div>
                  
                  <input type="text" name="names" id="names" className="bg-transparent border-b border-secondary text-primary placeholder-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="First and Last Name" required />
                </div>
                <div>
                 
                  <input type="phone" name="phone" id="password" placeholder="+1 234 567 8910 (Optional)" className="bg-transparent border-b border-secondary placeholder-primary text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent   " required />
                </div>
              <div className="flex flex-col justify-between">
              <p className="text-primary">What is your preferred contact mode?</p>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="emailrem" type="checkbox" value="" className="w-4 h-4 text-primary rounded border border-primary  " required />
                    </div>
                    <label htmlFor="emailrem" className="ml-2 text-sm font-medium text-primary text-primary">Email</label>
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="phonerem" type="checkbox" value="" className="w-4 h-4 text-primary rounded border border-primary  " required />
                    </div>
                    <label htmlFor="phonerem" className="ml-2 text-sm font-medium text-primary text-primary">Phone</label>
                  </div>
             
                </div>
                <button type="submit" className="  text-black bg-secondary  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-6 py-2.5 text-center  ">Submit</button>
             
              </form>
            </div>
    </div>
  </div>
</div>
          
          )

}

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
    <div className="z-10" id="somena">
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
<div className="md:order-2 md:-ml-12  bg-logo1 dark:bg-logo2 bg-no-repeat bg-center w-60 bg-contain  mobile:bg-contain h-14 "></div>
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
