
import Header from './components/Header'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HowItWorks from './pages/HowItWorks';
import AboutUs from './pages/AboutUs';
import TermsConditions from './pages/TermsandConditions';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
      </Router>
    
  );
}

export default App;
