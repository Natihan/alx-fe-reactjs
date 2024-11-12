import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px',
};

export default Navbar;
