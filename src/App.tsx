import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Home/Services/Services';
import Technologies from '../src/components/Home/Technologies/Technologies';
import Contacts from './components/Home/Contact/contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Home />
      <Services />
      <Technologies />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
