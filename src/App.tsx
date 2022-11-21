
import Header from './components/Header'
import Herosection from './components/Herosection';
import AfterHero from './components/AfterHero';
import WhatYouGet from './components/WhatYouGet';
import WaysCoinvest from './components/WaysCoinvest';
import OurGoal from './components/OurGoal';

function App() {
  
  return (
    <div className="dark:bg-[#191511]"><Header />
      <Herosection />
      <AfterHero />
      <WhatYouGet />
      <WaysCoinvest />
      <OurGoal />
    </div>
  );
}

export default App;
