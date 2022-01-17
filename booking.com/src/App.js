
import './App.css';
import Footer from './components/Footer/Footer';
import AllRoutes from './Routes/AllRoutes';
import {Navbar} from "./Navbar/Navbar";
import Routes from './Routes/AllRoutes'

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
