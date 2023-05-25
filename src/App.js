import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Categories from './routes/categories';
import { getCategories } from './redux/categories/categoriesSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Categories />
    </>
  );
}

export default App;
