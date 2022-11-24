
import subimage from "../images/subscribeimg.jpeg"
const Subscribe = () => { 
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-5 items-center lg:items-start md:items-center mobile:items-center p-4 m-5 dark:bg-bdark rounded-3xl bg-primary">

      <div className="flex flex-col justify-start items-start gap-8 p-4">
        <h1 className="text-xl font-medium  lg:text-left mobile:text-center text-newblack/90 dark:text-primary">Be the first to access our best pre-vetted properties.</h1>
        <input type="text" className="border-b text-newblack/80 placeholder-newblack/70 w-full bg-transparent lg:text-left mobile:text-center dark:text-gray-300 rounded-lg p-3" placeholder="Enter Your Email " />
        <p className="dark:text-gray-300 lg:text-left mobile:text-center text-newblack/80">I give Penthouse permission to contact me & I agree to the terms. This site is protected by reCAPTCHA and the Google privacy policy, terms of service and mobile terms.</p>
        <button  className="uppercase lg:mx-0 mobile:mx-auto dark:hover:bg-secondary flex items-center justify-center px-5 py-3  text-base leading-6 font-medium rounded-full text-newblack dark:text-newblack hover:text-primary bg-secondary dark:bg-yellow-200  dark:hover:text-newblack focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10 ">
               JOIN NOW
              </button>
      </div>
      <div className="p-4">


        <img src={subimage} alt="subscribe" className="w-full h-full rounded-3xl" />
      </div>
    </div>
  )
}


export default Subscribe
