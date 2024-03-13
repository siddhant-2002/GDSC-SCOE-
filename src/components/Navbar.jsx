
import "./Navbar.css";
// import Blogs from './Blogs';
// import Team from './Team';
// import Contact from './Contact';


const Navbar = () => {

  return (
    <div className='navDiv'>
      <div className='navLogo'>
        <img className='mainlogo' src="./images/gdscLogo.png" alt="Google Developer Student Clubs Logo" />  
      </div>
      
      <div className='navLinks'>
        <span >Blogs</span>
        <span >Team</span>
        <span >Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
