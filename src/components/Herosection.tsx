

import BgGlassmorphism from "./BgGlassMorphism"



const Herosection = () => { 
  return (
  <div className="grid relative m-5 rounded-3xl   grid-flow-row bg-primary dark:bg-bdark grid-rows-2 sm:grid-rows-1 md:grid-rows-1 sm:grid-cols-2 gap-4 ">
       <BgGlassmorphism />
      <div className="flex items-start justify-start relative">
 
        <main className="p-6 shrink">
        
          <div className="text-left items-start  flex-col space-y-9">
          
          <h2 className="text-5xl   text-secondary dark:text-yellow-100 tracking-normal   sm:leading-none ">
              GENERATE PASSIVE <br/> INCOME FROM
       
            </h2>
            <h2 className="text-5xl    text-secondary dark:text-yellow-100   tracking-normal  sm:leading-none ">
              
              HIGH RETURN RENTAL <br/> PROPERTIES 
            
       
            </h2>
            <h2 className="text-5xl   dark:text-yellow-100   text-secondary tracking-normal  sm:leading-none">
              
            AT A FRACTION OF THE <br/>  COST
            
       
          </h2>
          <p className="mt-3 dark:text-gray-200 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Penthouse allows you to co-invest in high return holiday rental properties that generate attractive returns at 10 times less than the normal cost: all 100% hands-off. Get the stability and yield of luxury real estate with the convenience of NFTs.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex justify-start">
            <div className="rounded-full shadow">
              <a href="/" className="w-full flex items-center justify-center px-8 py-3 uppercase text-base leading-6 font-medium rounded-full text-white bg-secondary dark:bg-yellow-200 dark:hover:text-black hover:text-black focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10 dark:text-black">
                Reserve Your Seat
              </a>
            </div>

          </div>
        </div>
      </main>
  </div>
      <div className="pt-5 pb-5 bg-heroimage bg-center bg-no-repeat bg-cover   lg:rounded-r-3xl  "  >
        
  </div>
  
</div>

 )
}


export default Herosection
