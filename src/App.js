import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Camera from './Components/Camera';
import Keyboard from './Components/Keyboard';
import Printers from './Components/Printers';
import Monitor from './Components/Monitor';
import Router from './Components/Router';
import Toy_car from './Components/Toy_car';
import Small_toy from './Components/Small_toy';
import Toy_truck from './Components/Toy_truck';
import Helicopter from './Components/Helicopter';
import Gun from './Components/Gun';
import Belt from'./Components/Belt';
import White from './Components/White';
import Shirt from './Components/Shirt';
import Teddy from './Components/Teddy';
import Red from './Components/Red';
import Puma from './Components/Puma';
import Gucci from './Components/Gucci';
import Nike from './Components/Nike';
import RedTape from './Components/RedTape';
import Boat from './Components/Boat';
import Realme from './Components/Realme';
import Noise from './Components/Noise';
import Iwatch from './Components/Iwatch';
import Wrist from './Components/Wrist';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>


  <Routes>
      <Route path="/"element={<Home></Home>}/>
      <Route path="/About"element={<About></About>}/>
      <Route path="/Contact"element={<Contact></Contact>}/> 
      <Route path="/Camera"element={<Camera></Camera>}/> 
      <Route path="/Keyboard"element={<Keyboard></Keyboard>}/> 
      <Route path="/Printers"element={<Printers></Printers>}/> 
      <Route path="/Monitor"element={<Monitor></Monitor>}/> 
      <Route path="/Router"element={<Router></Router>}/> 
      <Route path="/Toy_car"element={<Toy_car></Toy_car>}/> 
      <Route path="/Small_toy"element={<Small_toy></Small_toy>}/> 
        <Route path="/Toy_truck"element={<Toy_truck></Toy_truck>}/>
        <Route path="/Helicopter"element={<Helicopter></Helicopter>}/>
        <Route path="/Gun"element={<Gun></Gun>}/>
        <Route path="/Belt"element={<Belt></Belt>}/>
        <Route path="/White"element={<White></White>}/>
        <Route path="/Shirt"element={<Shirt></Shirt>}/>
        <Route path="/Teddy"element={<Teddy></Teddy>}/>
        <Route path="/Red"element={<Red></Red>}/>
        <Route path="/Puma"element={<Puma></Puma>}/>
        <Route path="/Gucci"element={<Gucci></Gucci>}/>
        <Route path="/Nike"element={<Nike></Nike>}/>
        <Route path="/RedTape"element={<RedTape></RedTape>}/>
        <Route path="/Boat"element={<Boat></Boat>}/>
        <Route path="/Realme"element={<Realme></Realme>}/>
        <Route path="/Noise"element={<Noise></Noise>}/>
        <Route path="/Iwatch"element={<Iwatch></Iwatch>}/>
        <Route path="/Wrist"element={<Wrist></Wrist>}/>
            </Routes>
 <Footer/>
    </>
  );
}

export default App;
