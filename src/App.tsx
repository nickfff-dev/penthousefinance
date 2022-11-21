
import Header from './components/Header'
import Herosection from './components/Herosection';
import AfterHero from './components/AfterHero';
import WhatYouGet from './components/WhatYouGet';

function App() {
  
  return (
    <div className="dark:bg-[#191511]"><Header />
      <Herosection />
      <AfterHero />
      <WhatYouGet />
    </div>
  );
}

export default App;
