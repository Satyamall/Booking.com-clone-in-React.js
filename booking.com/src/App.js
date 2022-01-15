
import './App.css';
import Footer from './Footer/Footer';
import AllRoutes from './Routes/AllRoutes';
import {Link} from "react-router-dom";
import {Navbar} from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
