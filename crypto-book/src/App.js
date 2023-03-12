import './App.css';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage';
import Detailpage from './pages/Detailpage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      
      {/* Navbar */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path="/coin/:id" element={<Detailpage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
