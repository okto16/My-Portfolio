import Linkedin from "../assets/linkedin.png";
import Github from "../assets/git.png";
import Instagram from "../assets/instagram.png";
const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/okto16", icon: Github, size: "w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8",name: "GitHub" },
    { href: "https://www.instagram.com/oktorino_bagas/", icon: Instagram, size: "w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8",name: "Instagram" },
    { href: "https://www.linkedin.com/in/oktorino-bagas-aji-sudarno", icon: Linkedin, size: "w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8",name: "Linkedin" },
  ];

  return (
    <footer className="py-8 sm:py-12 lg:py-16">
      <div className="text-center">
        <h2 className="text-lg sm:text-2xl lg:text-3xl mb-4 sm:mb-6">Connect with me</h2>
        <div className="flex justify-center items-center space-x-4 sm:space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 text-sm flex flex-col items-center"
            >
              <img src={link.icon} alt="" className={link.size} />
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
