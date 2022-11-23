
import image1 from "../images/Maria.png"
import image2 from "../images/download-3.jpeg"
import image3 from "../images/download-4.jpeg"

const AboutUs = () => { 
  return (
    <div className="dark:bg-black">
      <div className="pt-5 pb-5">
      <div className="grid m-5 lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1  dark:border-[#66584a]  rounded-3xl  dark:bg-bdark border-yellow-100">
  
      <div className="flex items-start mobile:rounded-t-3xl lg:rounded-r-none lg:rounded-l-3xl lg:justify-start mobile:justify-center bg-primary dark:bg-bdark relative">
 
        <main className="p-6">
        
          <div className="lg:text-left mobile:text-center items-center  flex-col space-y-9">
          
          <h2 className="text-5xl   text-secondary dark:text-yellow-100 tracking-normal   sm:leading-none ">
             ABOUT US
       
            </h2>
    
          <p className="mt-3 dark:text-gray-200 text-base  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Penthouse allows you to co-invest into high-yield rental properties


          </p>
              <ul className="space-y-5">
                <h1 className="dark:text-gray-200 text-base text-xl">Benefits</h1>
                <li className="dark:text-gray-200 text-base ">1. Lower entry cost (as low as 100 BUSD)</li>
                <li className="dark:text-gray-200 text-base ">2. 100% hassle free</li>
                <li className="dark:text-gray-200 text-base ">3. Passive income and equity appreciation</li>

          </ul>
          <div className="mt-5 lg:mx-0  sm:mx-auto mx-auto  w-2/4 sm:mt-8 sm:flex lg:justify-start mobile:justify-center">
            <div className="rounded-full shadow">
              <a href="/" className="w-full flex items-center justify-center px-5 py-3 uppercase text-base leading-6 font-medium rounded-full text-white bg-secondary dark:bg-yellow-200 dark:hover:text-black hover:text-black focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:text-lg  dark:text-black">
                Reserve Your Seat
              </a>
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
    
   
    <div id="profile" className="w-full lg:w-3/5  shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 dark:opacity-100">
    
  
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
  <div id="profile" className="w-full lg:w-3/5  shadow-2xl bg-white opacity-75 dark:opacity-100 mx-6 lg:mx-0">
  

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
    

  <div id="profile" className="w-full lg:w-3/5   shadow-2xl bg-white dark:opacity-100 mx-6 lg:mx-0">
  

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
  )
}


export default AboutUs
