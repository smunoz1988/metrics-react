import { IoIosArrowBack, IoMdMic } from 'react-icons/io';
import { FaBeer } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetails } from '../redux/details/detailSlice';
import '../styles/detail.css';

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const driverInfo = useSelector((store) => store.detail?.details?.driverDetails);
  const { driverId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getDetails(driverId));
  }, [dispatch]);

  const returntoDrivers = () => {
    navigate('/Drivers');
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false); // Update the loading state after the delay
    }, 1500); // Set the desired delay in milliseconds

    return () => clearTimeout(delay); // Cleanup the timer if the component unmounts
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="header">
          <button className="backButton" type="button" onClick={returntoDrivers}>
            <IoIosArrowBack />
          </button>
          <p>Driver Standings</p>
          <div>
            <FaBeer />
            <FaBeer />
          </div>
        </div>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <div className="top">
        <button className="backButton" type="button" onClick={returntoDrivers}>
          <IoIosArrowBack />
        </button>
        <p>Driver Details</p>
        <div>
          <IoMdMic />
          <AiTwotoneSetting className="setupWheel" />
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
