import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
// import Gundam from "../component/Gundam";
// import Gundam2 from "../component/Gundam2";
const Navbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', action: () => navigate('/') },
    { label: 'About', action: () => navigate('/about') },
    { label: 'Project', action: () => navigate('/project') },
    { label: 'Skill', action: () => navigate('/skill') }
  ];
  return (
    <nav className="relative flex flex-col sm:flex-row items-center justify-between py-6 sm:py-8 lg:py-12">
      <div className="relative z-10 flex items-center space-x-4">
        <div className="ring ring-primary ring-offset-2 ring-offset-base-100 rounded-full">
          <img 
            src={avatar} 
            alt="Profile"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full"
          />
        </div>
        <div>
          <h1 className="text-base sm:text-2xl lg:text-3xl font-bold">Biography</h1>
          <div className="flex gap-1 text-xs sm:text-sm lg:text-lg">
            <span>My name is Oktorino and I am a</span>
            <span className="text-primary color-change">Web Developer.</span>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-0">
        <ul className="flex items-center space-x-2 sm:space-x-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={item.action}
                className="btn btn-sm hover:bg-black rounded-lg px-3 py-1
                         text-xs sm:text-sm lg:text-base
                         min-h-0 h-8 sm:h-9 lg:h-10"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="absolute -z-10 left-0 sm:-left-16 lg:-left-32">
        <Gundam />
      </div>
      <div className="absolute -z-10 right-0 sm:-right-16 lg:-right-32">
        <Gundam2 />
      </div> */}
    </nav>
  );
};

export default Navbar;
