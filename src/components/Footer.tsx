

const Footer = () => { 
    return (
        <footer className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 justify-items-center bg-primary gap-5 p-10 items-start mb-3 dark:bg-black dark:text-white">
        <div className="flex flex-col  items-center lg:items-start md:items-center sm:items-center gap-y-5">
          <img src="https://penthouse.finance/wp-content/uploads/2022/05/Penthouse_banner1-300x48.png" className="h-6 w-32 mr-3 sm:h-6 dark:bg-white dark:p-1" alt="footer" />
          <a>
hello@penthouse.finance</a>
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
          <h2>TERMS</h2>
          <h2>PRIVACY</h2>
          
          </div>
        </footer>
    )
}


export default Footer
