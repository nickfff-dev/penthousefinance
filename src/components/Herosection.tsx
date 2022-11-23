
import { useState, useEffect } from "react"
import BgGlassmorphism from "./BgGlassMorphism"



const Herosection = () => { 
  const [mymodal, setMymodal] = useState(false)
  
  return (<>
  <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 m-5 rounded-3xl   bg-primary dark:bg-bdark  ">
       <BgGlassmorphism />
      <div className="flex items-start  lg:justify-start mobile:justify-center relative">
 
        <main className="p-6">
        
          <div className="lg:text-left mobile:text-center items-center  flex-col space-y-9">
          
          <h2 className="text-5xl   text-secondary dark:text-yellow-100 tracking-normal   sm:leading-none ">
              GENERATE PASSIVE <br/> INCOME FROM
       
            </h2>
            <h2 className="text-5xl    text-secondary dark:text-yellow-100   tracking-normal  sm:leading-none ">
              
              HIGH RETURN RENTAL <br/> PROPERTIES 
            
       
            </h2>
            <h2 className="text-5xl   dark:text-yellow-100   text-secondary tracking-normal  sm:leading-none">
              
            AT A FRACTION OF THE <br/>  COST
            
       
          </h2>
          <p className="mt-3 dark:text-gray-200 text-base text-newblack/80 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Penthouse allows you to co-invest in high return holiday rental properties that generate attractive returns at 10 times less than the normal cost: all 100% hands-off. Get the stability and yield of luxury real estate with the convenience of NFTs.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex lg:justify-start mobile:justify-center">
            <div className="rounded-full shadow">
                <button onClick={() => {
                      if (mymodal) {
                        setMymodal(false)
                      } else {
                        setMymodal(true)
                      }
                    }} className="w-full flex items-center justify-center px-8 py-3 uppercase text-base leading-6 font-medium rounded-full text-newblack bg-secondary dark:bg-yellow-200 dark:hover:text-newblack hover:text-newblack focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10 dark:text-newblack">
                Reserve Your Seat
              </button>
            </div>

          </div>
        </div>
      </main>
  </div>
      <div className="pt-5 pb-5 bg-heroimage bg-center bg-no-repeat bg-cover   lg:h-auto mobile:h-[300px]  lg:rounded-r-3xl "  >
        
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


export default Herosection
