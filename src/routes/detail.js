import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDetails } from '../redux/details/detailSlice';

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const driverInfo = useSelector((store) => store.detail);

  useEffect(() => {
    dispatch(getDetails());
  }, [dispatch]);

  const returntoDrivers = () => {
    navigate('/Drivers');
  };

  if (!driverInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button type="button" onClick={returntoDrivers}>camisa</button>
      <ul>
        <li>{driverInfo.details.driverDetails.podiums}</li>
      </ul>
    </>
  );
};

export default Detail;
