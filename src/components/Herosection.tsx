
import mine  from "../images/hero.jpeg"



const Herosection = () => { 
  return (
  <div className="grid  grid-flow-row bg-primary dark:bg-black grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4 border-b dark:border-secondary border-black">
  
  <div className="flex items-start justify-center">
    <main className="max-w-screen-xl p-4 lg:px-16">
        <div className="text-left flex-col space-y-10">
          <h2 className="text-5xl    text-secondary  sm:leading-none ">
              GENERATE PASSIVE INCOME FROM
       
            </h2>
            <h2 className="text-5xl tracking-tight    text-secondary  sm:leading-none ">
              
              HIGH RETURN RENTAL PROPERTIES 
            
       
            </h2>
            <h2 className="text-5xl tracking-tight    text-secondary  sm:leading-none">
              
            AT A FRACTION OF THE COST
            
       
          </h2>
          <p className="mt-3 dark:text-gray-300 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Penthouse allows you to co-invest in high return holiday rental properties that generate attractive returns at 10 times less than the normal cost: all 100% hands-off. Get the stability and yield of luxury real estate with the convenience of NFTs.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex justify-start">
            <div className="rounded-full shadow">
              <a href="/" className="w-full flex items-center justify-center px-8 py-3 uppercase text-base leading-6 font-medium rounded-full text-white bg-secondary hover:bg-black hover:text-secondary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 dark:text-black">
                Reserve Your Seat
              </a>
            </div>

          </div>
        </div>
      </main>
  </div>
      <div className="mr-6 pt-5 pb-4"  >
        <img src={ mine} className="rounded-xl max-w-full h-auto" alt="hero"/>
  </div>
  
</div>

 )
}


export default Herosection
