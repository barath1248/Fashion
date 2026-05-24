import  './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FASHION</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#collections">Men</a></li>
        <li><a href="#collections">Women</a></li>
        <li><a href="#collections">Collections</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;