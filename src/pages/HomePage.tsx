
import Herosection from '../components/Herosection';
import AfterHero from '../components/AfterHero';
import WhatYouGet from '../components/WhatYouGet';
import WaysCoinvest from '../components/WaysCoinvest';
import OurGoal from '../components/OurGoal';
import Subscribe from '../components/Subscribe';

import Timeline from '../components/Timeline';

function HomePage() {
  
  return (
    <div className="dark:bg-black">
  
      <Herosection />
      <AfterHero />
      <Timeline />
      <WhatYouGet />
      <WaysCoinvest />
      <OurGoal />
      <Subscribe />

    </div>
  );
}

export default HomePage;
