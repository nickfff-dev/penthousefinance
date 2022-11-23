

import {  useState } from "react"

const HowItWorks = () => { 
  const [mymodal, setMymodal] = useState(false)
  return (<>
    <div className="dark:bg-black ">
      <div className=" pt-5 pb-5">
    <div className="grid m-5 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-primary dark:bg-bdark rounded-3xl">
<div className="bg-howbg  lg:h-[565px] md:h-[965px] bg-cover bg-center bg-no-repeat mobile:h-[300px] relative rounded-b-3xl   mobile:rounded-t-3xl lg:rounded-r-none"  >
 
</div>

  


    <div className="lg:my-24 mt-10 py-19 lg:mx-20 ">
      <div className="">
        <h3 className="lg:text-4xl text-xl mt-5 font-semibold mb-10 dark:text-gray-300 text-center text-secondary lg:text-left sm:text-center md:text-center">HOW DOES PENTHOUSE <br/> WORK</h3>
        <p className="dark:text-primary mb-10 text-lg leading-relaxed text-center lg:text-left sm:text-center md:text-center text-newblack/90" >Earn passive income from the highest-yielding <br/>asset class in real estate</p>
              <button onClick={() => {
                if (mymodal) {
                  setMymodal(false)
                } else {
                  setMymodal(true)
                }
              }
                    } className="uppercase lg:mx-0 mx-auto mb-3 w-48 text-newblack/90 mobile:mx-auto dark:hover:bg-secondary flex items-center justify-center px-5 py-3  text-base leading-6 font-medium rounded-full text-black dark:text-black hover:text-white bg-secondary dark:bg-yellow-200  dark:hover:text-black focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10 ">
      GET ACCESS
    </button>  
    </div>
 
    



  </div>

    </div>
    

        <div className="bg-primary dark:bg-bdark rounded-3xl pt-8  m-5">
    <div className="rounded-3xl grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1  gap-5 p-5 ">
    <div className="lg:p-12  p-4 text-center lg:text-left md:text-center sm:text-center rounded-3xl border border-black dark:border-[#66584a]">
        <p className="dark:text-black dark:bg-yellow-100 bg-secondary px-4 py-1 inline-block   text-xl text-primary font-medium rounded mb-5">1</p>
        <h3 className="lg:text-2xl font-semibold mb-5 mt-3 dark:text-gray-300 text-center lg:text-left md:text-center sm:text-center text-newblack/90">Browse Homes</h3>
        <p className="lg:text-lg  lg:mb-5 dark:text-primary text-center lg:text-left md:text-center sm:text-center text-newblack/90">Sign up as a Penthouse member.</p>
        <p className="dark:text-primary lg:mb-5  text-lg text-center lg:text-left md:text-center sm:text-center text-newblack/90">We’re hard at work searching for great properties for you. You’ll be notified about co-investment opportunities in rental properties that suit your requirements.</p>
        <p className="dark:text-primary text-lg text-center lg:text-left md:text-center sm:text-center text-newblack/90">Get started earning passive income right away.</p>
      </div>
      <div className=" lg:p-12 p-4 text-center lg:text-left md:text-center sm:text-center rounded-3xl border border-black dark:border-[#66584a]">
        <p className="dark:text-black dark:bg-yellow-100 bg-secondary px-4 py-1 inline-block   text-xl text-primary font-medium rounded mb-5">2</p>
        <h3 className="lg:text-2xl font-semibold lg:mb-5 mt-3 dark:text-gray-300 text-center lg:text-left md:text-center sm:text-center text-newblack/90">Co-Invest</h3>
        <p className="lg:text-lg  lg:mb-5 dark:text-primary text-center lg:text-left md:text-center sm:text-center text-newblack/90">Reserve your shares for each rental property by purchasing a property NFT and become a passive co-investor.</p>
        <p className="dark:text-primary mb-5 text-lg text-center lg:text-left md:text-center sm:text-center text-newblack/90">You will own shares directly in the LLC that owns the rental property. Penthouse will always be co-invested alongside you in every property for maximum alignment of interests.</p>

      </div>
      <div className="lg:p-12 p-4 text-center lg:text-left md:text-center sm:text-center rounded-3xl border border-black dark:border-[#66584a]">
        <p className="dark:text-black dark:bg-yellow-100 bg-secondary px-4 py-1 inline-block   text-xl text-primary font-medium rounded mb-5">3</p>
        <h3 className="lg:text-2xl font-semibold text-newblack/90 lg:mb-5 mt-3 dark:text-gray-300 text-center lg:text-left md:text-center sm:text-center">Enjoy</h3>
        <p className="lg:text-lg text-newblack/90  lg:mb-5 dark:text-primary text-center lg:text-left md:text-center sm:text-center">Penthouse handles all deal execution, mortgage financing, co-investor aggregation, and property management.</p>
        <p className="dark:text-primary mb-5 text-newblack/90 text-md text-center lg:text-left md:text-center sm:text-center">You just sit back and collect passive income sent quarterly to your account. You are also free to sell your shares on the secondary market by selling your NFT.</p>

      </div>
    </div>
    <div className="flex flex-col justify-center items-center pb-8">      <button onClick={() => {
                      if (mymodal) {
                        setMymodal(false)
                      } else {
                        setMymodal(true)
                      }
                    }} className=" px-8 py-3  uppercase dark:text-black text-base leading-6 font-medium text-newblack rounded-full  bg-secondary dark:bg-yellow-200 dark:hover:bg-secondary hover:text-black focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Start Now
              </button></div>
    
        </div>
  
      </div>
 
    
    </div>
    {
      mymodal  ? ( <div className="modal   fade fixed top-0 left-0 right-0 z-20 mx-auto w-[1000px]  w-1/2 h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog relative w-auto pointer-events-none">
    <div
      className="modal-content px-12  border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-modalbg bg-center bg-cover outline-none text-current">
            <button type="button" onClick={() => setMymodal(false)}  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
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
                <button type="submit" className="text-newblack bg-secondary  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-6 py-2.5 text-center  ">Submit</button>
             
              </form>
            </div>
    </div>
  </div>
</div>): null
   }
    </>


)
}

export default HowItWorks
