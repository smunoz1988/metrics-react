import { FaBeer } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => (
  <div className="header">
    <p>2022</p>
    <p>Driver Standings</p>
    <div>
      <FaBeer />
      <FaBeer />
    </div>
  </div>
);

export default Header;
