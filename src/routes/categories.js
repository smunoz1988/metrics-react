import { useSelector } from 'react-redux';
import { useState } from 'react';
import { TbHelmet } from 'react-icons/tb';

const Categories = () => {
  const categoriesData = useSelector((store) => store.category);
  const driversData = categoriesData.categories?.drivers;
  const [filterDrivers, setFilterDrivers] = useState(driversData);

  const handleChange = (event) => {
    const { value } = event.target;
    setFilterDrivers(value);
  };

  const filteredDrivers = driversData.filter((driver) => driver.toLowerCase().includes(filterDrivers.toLowerCase()));

  if (!filteredDrivers) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input placeholder="Search driver.." onChange={handleChange} />
      {filteredDrivers.map((driver) => (
        <div key={driver.rank}>
          <TbHelmet />
          <p>{`${driver.firstname} ${driver.lastname}`}</p>
          <p>{`Rank: ${driver.rank}`}</p>
          <p>{`Points: ${driver.points}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
