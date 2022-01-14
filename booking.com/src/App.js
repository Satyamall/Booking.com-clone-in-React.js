
import './App.css';
import CarRentals from './CarRentalsPage/CarRentals';
import Footer from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <CarRentals />
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
