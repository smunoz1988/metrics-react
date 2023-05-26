import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Categories from './routes/categories';
import Detail from './routes/Detail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="Drivers" element={<Categories />} />
        <Route path="Details/:driverId" element={<Detail />} />
        <Route path="/" element={<Navigate to="/Drivers" />} />
      </Routes>
    </>
  );
}

export default App;
