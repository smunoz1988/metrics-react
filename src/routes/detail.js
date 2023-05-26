import { FaBeer } from 'react-icons/fa';
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

  return (
    <>
      <div className="header">
        <button type="button" onClick={returntoDrivers}>X</button>
        <p>Driver Standings</p>
        <div>
          <FaBeer />
          <FaBeer />
        </div>
      </div>
      <div>
        <h2>{`${driverInfo.firstname} ${driverInfo.lastname}`}</h2>
        <p>{`Points: ${driverInfo.points}`}</p>
      </div>
      <ul>
        <li>{`Team: ${driverInfo.team}`}</li>
        <li>{`Team country: ${driverInfo.country}`}</li>
        <li>{`GP entered: ${driverInfo.grandsPrixEntered}`}</li>
        <li>{`Highest Grid Position: ${driverInfo.highestGridPosition}`}</li>
        <li>{`Podiums: ${driverInfo.podiums}`}</li>
        <li>{`Highest Race Finish: ${driverInfo.highestRaceFinish}`}</li>
        <li>{`Place of birth: ${driverInfo.placeOfBirth}`}</li>
        <li>{`Date of birth: ${driverInfo.dateOfBirth}`}</li>
        <li>{`World Championship: ${driverInfo.worldChampionships}`}</li>
      </ul>
    </>
  );
};

export default Detail;
