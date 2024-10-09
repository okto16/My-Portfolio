import Linkedin from "../assets/linkedin.png";
import Github from "../assets/git.png";
import Instagram from "../assets/instagram.png";
const Footer = () => {
  return (
    <div className="mt-10 py-16 flex justify-center">
      <div className="text-center">
        <h3 className="text-lg lg:text-3xl mb-5">Connect with me</h3>
        <div className="justify-center flex space-x-5 items-center">
          <a
            href="https://github.com/okto16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="" className="size-6 lg:size-10" />
          </a>
          <a
            href="https://www.instagram.com/oktorino_bagas/profilecard/?igsh=dGQzemF4M3Q0MGN4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} className="size-3 lg:size-7" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/oktorino-bagas-aji-sudarno-177161292/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} className="size-4 lg:size-8" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
