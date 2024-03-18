import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

interface BurgerProps {
  handleBurgerClick: React.MouseEventHandler;
}

const BurgerMenu: React.FC<BurgerProps> = ({ handleBurgerClick }) => {
  
  return (
    <nav
      className="absolute p-10 pt-14 top-16 right-0 flex flex-col justify-center items-center gap-6 bg-[#686354e9] font-semibold text-white rounded-l-md z-50 overflow-y-auto"
      style={{ transition: "top 0.5s ease" }}
    >
      <img src="close-icon.svg" className="hidden absolute top-3 right-5 h-6" onClick={handleBurgerClick}/>
      <Link to='/'>WHAT WE DO</Link>
      <Link to='/Portfolio'>PROJECTS</Link>
      <Link to='/WhoAreWe'>ABOUT US</Link>
      <Link to='/ContactUs'>CONTACT US</Link>
      
    </nav>
  );
};

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [isTop, setIsTop] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setIsTop(scrollTop === 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  const handleBurgerClick = () => {
    setshowMenu(!showMenu);
  };

  return (
    <div className={`flex flex-row justify-between bg-[#00000089] ${isTop ? 'relative' : 'fixed'} w-full py-3 px-8 z-[51]`}>
      <div className="hidden md:flex flex-row gap-4 lg:gap-12 ml-[5%]">
      <Link to='/'>WHAT WE DO</Link>
      <Link to='/Portfolio'>PROJECTS</Link>
      </div>
      <h1>LOGO</h1>

      {showMenu ? (
        <div className="burger md:hidden ">
          <img
            src="close-icon.svg"
            className="h-[30px] transition-all duration-500 ease-in-out"
            alt="close"
            onClick={handleBurgerClick}
          />

          <BurgerMenu handleBurgerClick={handleBurgerClick} />
        </div>
      ) : (
        <div className="burger md:hidden ">
          <img
            src="hamburger-menu.svg"
            className="transition-all duration-500 ease-in-out"
            alt="burger menu"
            onClick={handleBurgerClick}
          />
        </div>
      )}

      <div className="hidden md:flex flex-row gap-4 lg:gap-12 mr-[5%]">
      <Link to='/WhoAreWe'>ABOUT US</Link>
      <Link to='/ContactUs'>CONTACT US</Link>
      </div>
     
    </div>

  );
};

export default Navbar;
