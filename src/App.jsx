
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Category from './components/Category';
import Products from './components/Products';
import DogMid from './components/DogMid';
import CatMid from './components/CatMid';
import Clients from './components/Clients';
import Contact from './components/Contact'
import Footer from './components/Footer';


function App() {
  

  return (
    <>
      <Navbar />
      
      <Hero />
      <Category />
      <DogMid />
      <Products />
      <CatMid />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default App
