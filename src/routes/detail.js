import { IoIosArrowBack, IoMdMic } from 'react-icons/io';
import { AiTwotoneSetting } from 'react-icons/ai';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { BsArrowRightCircle } from 'react-icons/bs';
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
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(delay);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="header">
          <button className="backButton" type="button" onClick={returntoDrivers}>
            <IoIosArrowBack />
          </button>
          <p>Driver Detail</p>
          <div>
            <IoMdMic />
            <AiTwotoneSetting className="setupWheel" />
          </div>
        </div>
        <p className="loadingStatus">Loading...</p>
      </>
    );
  }

  if (!driverInfo) {
    return <p className="loadingStatus">Loading...</p>;
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
      <div className="titleDriver">
        <GiFullMotorcycleHelmet className="helmetDriversDetail" />
        <div className="nameDataDriver">
          <h2 className="driverTopData">{`${driverInfo.firstname} ${driverInfo.lastname}`}</h2>
          <p className="driverTopData">{`Total Career Points: ${driverInfo.points}`}</p>
        </div>
      </div>
      <p className="statsTitle">DRIVER STATS</p>
      <div>

        <div className="detailDataContainer">
          <p>Team:</p>
          <div className="flexRow">
            <p>{driverInfo.team}</p>
            <BsArrowRightCircle className="setupWheel" />
          </div>
        </div>

        <div className="detailDataContainer">
          <p>Team country:</p>
          <div className="flexRow">
            <p>{driverInfo.country}</p>
            <BsArrowRightCircle className="setupWheel" />
          </div>
        </div>

        <div className="detailDataContainer">
          <p>GP entered:</p>
          <div className="flexRow">
            <p>{driverInfo.grandsPrixEntered}</p>
            <BsArrowRightCircle className="setupWheel" />
          </div>
        </div>

        <div className="detailDataContainer">
          <p>Highest Grid Position:</p>
          <div className="flexRow">
            <p>{driverInfo.highestGridPosition}</p>
            <BsArrowRightCircle className="setupWheel" />
          </div>
        </div>

        <div className="detailDataContainer">
          <p>Podiums:</p>
          <div className="flexRow">
            <p>{driverInfo.podiums}</p>
            <BsArrowRightCircle className="setupWheel" />
          </div>
        </div>

        <div className="detailDataContainer">
          <p>Highest Race Finish:</p>
          <div className="flexRow">
            <p>{driverInfo.highestRaceFinish}</p>
            <BsArrowRightCircle className="setupWheel" />
          </div>
        </div>

        <div className="detailDataContainer">
          <p>Place of birth:</p>
          <div className="flexRow">
            <p>{driverInfo.placeOfBirth}</p>
            <BsArrowRightCircle className="setupWheel" />
          </div>
        </div>

        <div className="detailDataContainer">
          <p>Date of birth:</p>
          <div className="flexRow">
            <p>{driverInfo.dateOfBirth}</p>
            <BsArrowRightCircle className="setupWheel" />
          </div>
        </div>

        <div className="detailDataContainer">
          <p>World Championship: </p>
          <div className="flexRow">
            <p>{driverInfo.worldChampionships}</p>
            <BsArrowRightCircle className="setupWheel" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
