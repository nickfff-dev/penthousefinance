
import logo2 from '../images/Penthouse2.png';
const Footer = () => { 
    return (
        <footer className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 justify-items-center bg-primary gap-5 p-10 items-start  dark:bg-bdark dark:text-white">
        <div className="flex flex-col  items-center lg:items-start md:items-center sm:items-center gap-y-5">
          <img src={logo2} className="h-6 w-32 mr-3 sm:h-6" alt="footer" />
          
            <div className="flex flex-row gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg><a href="mailto:hello@penthouse.finance">hello@penthouse.finance</a> </div>

        </div>
        <div className="flex flex-col lg:items-start md:items-center text-center gap-y-5">
          
          <h1>INVEST</h1>
          <h2>How It Works</h2>
          
        </div>
        <div className="flex flex-col lg:items-start md:items-center text-center gap-y-5">
          
          <h1>LEARN</h1>
          <h2>Our Story</h2>
          
        </div>
        <div className="flex flex-col lg:items-start md:items-center text-center gap-y-5">
          
          <h1>COMPANY</h1>
          <h2>Terms</h2>
          <h2>Privacy</h2>
          
          </div>
        </footer>
    )
}


export default Footer
