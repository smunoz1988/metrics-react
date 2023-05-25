import { FaBeer } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => (
  <div className="header">
    <p>Year</p>
    <p>Data type</p>
    <div>
      <FaBeer />
      <FaBeer />
    </div>
  </div>
);

export default Header;