import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './routes/categories';
import Detail from './routes/detail';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="Drivers" element={<Categories />} />
        <Route path="Details/:driverId" element={<Detail />} />
        <Route path="/" element={<Navigate to="/Drivers" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
