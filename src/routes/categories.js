import { useSelector } from 'react-redux';
import { TbHelmet } from 'react-icons/tb';

const Categories = () => {
  const categoriesData = useSelector((store) => store.category);
  const driversData = categoriesData.categories?.drivers;

  if (!driversData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {driversData.map((driver) => (
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
