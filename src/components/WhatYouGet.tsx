




const WhatYouGet = () => {
  return (
    <div className="m-5 rounded-3xl  grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-primary dark:bg-bdark    dark:border-gray-200 border-black">
      <div className="bg-whatimg pb-5  lg:h-auto bg-cover bg-center bg-no-repeat mobile:h-[300px] relative lg:rounded-l-3xl mobile:rounded-t-3xl lg:rounded-r-none"  >
       
      </div>
      <div className="p-4 space-x-4 space-y-4">
        <h1 className=" text-4xl text-center w-full mb-8 dark:text-yellow-100">WITH PENTHOUSE, YOU GET:</h1>
        <div className="flex flex-col justify-between gap-3 relative">

          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-6">
            <div className="p-4">
              <h3 className="lg:text-xl lg:text-left sm:text-center text-center md:text-center font-semibold mb-3 dark:text-gray-300">Consistent Passive Income</h3>
              <p className="dark:text-primary text-sm  leading-relaxed text-center lg:text-left sm:text-center md:text-center">Earn rental income and receive deposits quarterly. Penthouse acquires and manages your properties so you don’t have to do anything.</p>
            </div>
            <div className="p-4">
              <h3 className="lg:text-xl lg:text-left sm:text-center text-center md:text-center font-semibold mb-3 dark:text-gray-300  ">High-Yield</h3>
              <p className="dark:text-primary text-sm leading-relaxed text-center lg:text-left sm:text-center md:text-center">Our properties are located in stable high appreciation and high cash-flowing vacation markets that deliver a strong long-term return.</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 ">
            <div className=" p-4">
              <h3 className="lg:text-xl font-semibold mb-3 dark:text-gray-300 text-center lg:text-left sm:text-center md:text-center">Fractional Ownership</h3>
              <p className="dark:text-primary text-sm leading-relaxed text-center lg:text-left sm:text-center md:text-center">Shares are offered in select vacation rentals – this results in a lower barrier to entry and lower cost of diversification.</p>
            </div>
            <div className="p-4">
              <h3 className="lg:text-xl font-semibold mb-3 dark:text-gray-300 text-center lg:text-left sm:text-center md:text-center">Modern Technology, Traditional Finance</h3>
              <p className="dark:text-primary text-sm leading-relaxed text-center lg:text-left sm:text-center md:text-center">Gain the advantage of Non-Fungible Token (NFT) technology while keeping the yields and consistency of real estate.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 ">
            <div className=" p-4">
              <h3 className="lg:text-xl font-semibold mb-3 dark:text-gray-300 text-center lg:text-left sm:text-center md:text-center">Diversify with Real Estate</h3>
              <p className="dark:text-primary text-sm leading-relaxed text-center lg:text-left sm:text-center md:text-center" >Access historically consistent returns with low correlation to either the crypto market or the stock market.</p>
            </div>
            <div className="p-4">
              <h3 className="lg:text-xl font-semibold mb-3 dark:text-gray-300 text-center lg:text-left sm:text-center md:text-center ">Flexible Investment Amounts</h3>
              <p className="dark:text-primary text-sm leading-relaxed text-center lg:text-left md:text-center sm:text-center ">Invest anywhere from 100 USDC to 20,000 USDC per house and build a portfolio across several properties.</p>
            </div>
          </div>
          <div className="lg:mx-0 mx-auto w-2/6 sm:mx-auto lg:pl-4 sm:mx-auto md:mx-auto">  <a href="/" className="uppercase  dark:hover:bg-secondary flex items-center justify-center px-5 py-3  text-base leading-6 font-medium rounded-full text-white dark:text-black hover:text-black bg-secondary dark:bg-yellow-200  dark:hover:text-black focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10 ">
               JOIN NOW
              </a>
          </div>

        </div>

      </div>


    </div>

  )
}


export default WhatYouGet
