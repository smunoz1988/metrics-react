import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbHelmet } from 'react-icons/tb';
import { IoIosArrowBack, IoMdMic } from 'react-icons/io';
import { AiTwotoneSetting } from 'react-icons/ai';
import { getCategories } from '../redux/categories/categoriesSlice';
import '../styles/categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const driversData = useSelector((store) => store.category?.categories?.drivers);
  const [filterDrivers, setFilterDrivers] = useState('');

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleChange = (event) => {
    const { value } = event.target;
    setFilterDrivers(value);
  };

  const handleClickItem = (driverId) => {
    navigate(`/Details/${driverId}`);
  };

  if (!driversData) {
    return <div>Loading...</div>;
  }

  const filteredDrivers = driversData.filter((driver) => {
    const lowercaseFirstName = driver.firstname.toLowerCase();
    const lowercaseLastName = driver.lastname.toLowerCase();
    const lowercaseFilter = filterDrivers.toLowerCase();

    return lowercaseFirstName.includes(lowercaseFilter) || lowercaseLastName.includes(lowercaseFilter);
  });

  return (
    <>
      <div className="header">
        <IoIosArrowBack />
        <p>2022</p>
        <p>Driver Standings</p>
        <div>
          <IoMdMic />
          <AiTwotoneSetting />
        </div>
      </div>
      <input placeholder="Search driver.." onChange={handleChange} />
      <div className="cardsContainer">
        {filteredDrivers.map((driver) => (
          <button className="driverContainer" key={driver.rank} type="button" onClick={() => handleClickItem(`${driver.firstname}${driver.lastname}`)}>
            <TbHelmet />
            <p>{`${driver.firstname} ${driver.lastname}`}</p>
            <p>{`Rank: ${driver.rank}`}</p>
            <p>{`Points: ${driver.points}`}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
