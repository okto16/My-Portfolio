import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
const Navbar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const goToAbout = () => {
    navigate("/about");
  };
  const goToProject = () => {
    navigate("/project");
  };
  const goToSkill = () => {
    navigate("/skill");
  };
  return (
    <div className="navbar py-16">
      <div className="flex-1 space-x-5">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2">
            <img src={avatar} />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Biography</h1>
          <div className="flex gap-1">
            <h3>My name is Oktorino and I am a</h3>
            <h3 className="text-primary color-change">Web Developer.</h3>
          </div>
          {/* <h3>I was born in Klaten, on October 16, 2000. I started coding since 2019.Exicited on Web programming.</h3> */}
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-5 space-x-5">
          <button
            onClick={goToHome}
            className="btn hover:bg-black btn-sm rounded-lg"
          >
            Home
          </button>
          <button onClick={goToAbout} className="btn hover:bg-black btn-sm rounded-lg">
            About
          </button>
          <button
            onClick={goToProject}
            className="btn hover:bg-black btn-sm rounded-lg"
          >
            Project
          </button>
          <button 
          onClick={goToSkill}
          className="btn hover:bg-black btn-sm rounded-lg">
            Skill
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
