import './App.css';
import Articles from './Articles/Articles';
import Footer from './Components/Footer/Footer';
import Introduction from './Components/Introduction/Introduction';
import Navbar from './Components/Navbar/Navbar';
import OurProducts from './Components/OurProducts/OurProducts';
import Support from './Components/Support/Support';
import Trusted from './Components/Trusted/Trusted';
import InThePress from './InThePress/InThePress';
import InvestAnywhere from './InvestAnywhere/InvestAnywhere';
import Review from './Review/Review';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Introduction/>
        <OurProducts/>
        <Trusted/>
        <Articles/>
        <InThePress/>
        <Review/>
        <InvestAnywhere/>
        <Support/>
        <Footer/>
    </div>
  );
}

export default App;
