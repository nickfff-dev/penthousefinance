
import subimage from "../images/subscribeimg.jpeg"
const Subscribe = () => { 
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-5 items-start lg:items-center md:items-start sm:items-start p-4 m-5 dark:bg-bdark rounded-3xl bg-primary">

      <div className="flex flex-col justify-start items-start gap-8 p-4">
        <h1 className="text-xl font-medium text-left text-newblack/90 dark:text-primary">Be the first to access our best pre-vetted properties.</h1>
        <input type="text" className="border-b text-newblack/80 placeholder-newblack/70 w-full bg-transparent dark:text-gray-300 rounded-lg p-3" placeholder="Enter Your Email " />
        <p className="dark:text-gray-300 text-newblack/80">I give Penthouse permission to contact me & I agree to the terms. This site is protected by reCAPTCHA and the Google privacy policy, terms of service and mobile terms.</p>
        <a href="/" className="uppercase  dark:hover:bg-secondary flex items-center justify-center px-5 py-3  text-base leading-6 font-medium rounded-full text-newblack dark:text-newblack hover:text-newblack bg-secondary dark:bg-yellow-200  dark:hover:text-newblack focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10 ">
               JOIN NOW
              </a>
      </div>
      <div className="p-4">


        <img src={subimage} alt="subscribe" className="w-full h-full rounded-3xl" />
      </div>
    </div>
  )
}


export default Subscribe
