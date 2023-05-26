import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetails } from '../redux/details/detailSlice';

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const driverInfo = useSelector((store) => store.detail?.details?.driverDetails);
  const { driverId } = useParams();

  useEffect(() => {
    dispatch(getDetails(driverId));
  }, [dispatch]);

  const returntoDrivers = () => {
    navigate('/Drivers');
  };

  if (!driverInfo) {
    return <div>Loading...</div>;
  }

  console.log('test', driverInfo);
  return (
    <>
      <button type="button" onClick={returntoDrivers}>camisa</button>
      <ul>
        <li>{driverInfo.team}</li>
        <li>{driverInfo.team}</li>
      </ul>
    </>
  );
};

export default Detail;
