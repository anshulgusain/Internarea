
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Intern from './components/Internship/Intern';
import Register from './components/auth/Register';

function App() {
  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/internship' element={<Intern />} />
        <Route path='/register' element={<Register />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
