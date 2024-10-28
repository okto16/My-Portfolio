import Linkedin from "../assets/linkedin.png";
import Github from "../assets/git.png";
import Instagram from "../assets/instagram.png";
const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/okto16", icon: Github, size: "w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" },
    { href: "https://www.instagram.com/oktorino_bagas/", icon: Instagram, size: "w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6" },
    { href: "https://www.linkedin.com/in/oktorino-bagas-aji-sudarno", icon: Linkedin, size: "w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" }
  ];

  return (
    <footer className="py-8 sm:py-12 lg:py-16">
      <div className="text-center">
        <h3 className="text-lg sm:text-2xl lg:text-3xl mb-4 sm:mb-6">Connect with me</h3>
        <div className="flex justify-center items-center space-x-4 sm:space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img src={link.icon} alt="" className={link.size} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
