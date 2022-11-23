
import image1 from "../images/Maria.png"
import image2 from "../images/download-3.jpeg"
import image3 from "../images/download-4.jpeg"
import {  useState } from "react"


const AboutUs = () => {
  const [mymodal, setMymodal] = useState(false)
  return (<>
    <div className="dark:bg-black">
      <div className="pt-5 pb-5">
      <div className="grid m-5 lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1  dark:border-[#66584a]  rounded-3xl  dark:bg-bdark border-yellow-100">
  
      <div className="flex items-start mobile:rounded-t-3xl lg:rounded-r-none lg:rounded-l-3xl lg:justify-start mobile:justify-center bg-primary dark:bg-bdark relative">
 
        <main className="p-6">
        
          <div className="lg:text-left mobile:text-center items-center  flex-col space-y-9">
          
          <h2 className="text-5xl   text-secondary dark:text-yellow-100 tracking-normal   sm:leading-none ">
             ABOUT US
       
            </h2>
    
          <p className="mt-3 text-newblack/90 dark:text-gray-200 text-base  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Penthouse allows you to co-invest into high-yield rental properties


          </p>
              <ul className="space-y-5">
                <h1 className="dark:text-gray-200 text-base text-newblack/90 text-xl">Benefits</h1>
                <li className="dark:text-gray-200 text-base text-newblack/90">1. Lower entry cost (as low as 100 BUSD)</li>
                <li className="dark:text-gray-200 text-base text-newblack/90">2. 100% hassle free</li>
                <li className="dark:text-gray-200 text-base text-newblack/90">3. Passive income and equity appreciation</li>

          </ul>
          <div className="mt-5 lg:mx-0  sm:mx-auto mx-auto  w-2/4 sm:mt-8 sm:flex lg:justify-start mobile:justify-center">
            <div className="rounded-full shadow">
                    <button onClick={() => {
                      if (mymodal) {
                        setMymodal(false)
                      } else {
                        setMymodal(true)
                      }
                    }
              
              } className="w-full flex items-center justify-center px-5 py-3 uppercase text-base leading-6 font-medium rounded-full text-newblack bg-secondary dark:bg-yellow-200 dark:hover:text-newblack hover:text-newblack focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:text-lg  dark:text-newblack">
                Reserve Your Seat
              </button>
            </div>

          </div>
        </div>
      </main>
  </div>
      <div className="pt-5 pb-5 bg-mainabtbg bg-center bg-no-repeat bg-cover  rounded-b-3xl  lg:rounded-r-3xl  mobile:rounded-b-3xl mobile:rounded-t-none lg:rounded-l-none  lg:h-auto mobile:h-[420px]  "  >
        
  </div>
  
      </div>

      <div className="gap-5 p-4 mt-10 bg-primary dark:bg-bdark m-5 rounded-3xl">
      <div className="max-w-4xl flex items-center h-auto  flex-wrap mx-auto my-10 lg:my-0">
    
   
    <div id="profile" className="w-full lg:w-3/5  shadow-2xl bg-primary opacity-75 mx-6 lg:mx-0 dark:opacity-100">
    
  
      <div className="p-4 md:p-12 text-center lg:text-left ">
        
        <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-abtbg2"></div>
        
        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Aaron Schultz </h1>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-secondary dark:border-[#66584a] opacity-25"></div>
        <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-secondary pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg>Founder and CEO</p>
       
        <p className="pt-8 text-sm">Seasoned leader with a vast experience managing large scale international organizations in the finance and fintech industries. Early adopter of Crypto (2013), successfully led multiple technical ventures.</p>
  
    
  
     
        
        
      </div>
  
    </div>
    <div className="w-full lg:w-2/5">
      
      <img src={image2} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt="abt"/>
      
      
    </div>
    
 
    
    
    
  
  
      </div>
      <div className="max-w-4xl flex items-center h-auto  flex-wrap mx-auto my-32 lg:my-0">
    
    <div className="w-full lg:w-2/5">
    
    <img src={image3} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt="abt"/>
    
    
  </div>
  <div id="profile" className="w-full lg:w-3/5  shadow-2xl bg-primary opacity-75 dark:opacity-100 mx-6 lg:mx-0">
  

    <div className="p-4 md:p-12 text-center lg:text-left">
      
      <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-abtbg3"></div>
      
      <h1 className="text-3xl font-bold pt-8 lg:pt-0">Mark Davis </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-secondary dark:border-[#66584a] opacity-25"></div>
      <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-secondary pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg>CTO</p>
     
      <p className="pt-8 text-sm">Seasoned technical leader, Computer scientist & Platform developer. Blockchain & Web3 expert with multiple years of experience with dApps, DAOs, CeFi & DeFi Projects.</p>

  

   
      
      
    </div>

  </div>
  
  

  
  
  
 

      </div>
      <div className="max-w-4xl flex items-center h-auto  flex-wrap mx-auto my-32 lg:my-0 mb-3">
    

  <div id="profile" className="w-full lg:w-3/5   shadow-2xl bg-primary opacity-75 dark:opacity-100 mx-6 lg:mx-0">
  

    <div className="p-4 md:p-12 text-center lg:text-left">
      
      <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-abtbg1"></div>
      
      <h1 className="text-3xl font-bold pt-8 lg:pt-0">Maria Bailey</h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-secondary dark:border-[#66584a] opacity-25 "></div>
      <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-secondary pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg>Marketing and Operations </p>
     
      <p className="pt-8 text-sm">Veteran in marketing and business operations. Master’s Diploma in Marketing, extensive experience in Affiliate Marketing. Commercially oriented and capable of refocusing the business to address evolving user expectations through data engineering interventions.</p>

  

   
      
      
    </div>

  </div>
  
  <div className="w-full lg:w-2/5">
    
    <img src={image1} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt="abt"/>
    
    
  </div>

  
  
  


</div>

      </div>
           
      </div>
      
    </div>
    {
      mymodal  ? ( <div className="modal   fade fixed top-0 left-0 right-0 z-20 mx-auto w-[1000px]  w-1/2 h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog relative w-auto pointer-events-none">
    <div
      className="modal-content lg:px-12  border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-modalbg bg-center bg-cover outline-none text-current">
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


export default AboutUs
