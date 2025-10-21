import './App.css';
import { CustomNavbar } from './components/Navbar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Banner />
    </div>
  );
}

export default App;
