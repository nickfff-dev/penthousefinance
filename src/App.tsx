
import Header from './components/Header'
import Herosection from './components/Herosection';
import AfterHero from './components/AfterHero';
import WhatYouGet from './components/WhatYouGet';
import WaysCoinvest from './components/WaysCoinvest';
import OurGoal from './components/OurGoal';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="dark:bg-black">
      <Header />
      <Herosection />
      <AfterHero />
      <WhatYouGet />
      <WaysCoinvest />
      <OurGoal />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
