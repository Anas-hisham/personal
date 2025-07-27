import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./SocialMedia.css";

const socialLinks = [
  {
    href: "https://www.instagram.com/anashishamm/",
    label: "Visit my Instagram profile",
    icon: <FaInstagram aria-hidden="true" />,
  },
  {
    href: "https://api.whatsapp.com/send?phone=201111012953",
    label: "Chat with me on WhatsApp",
    icon: <FaWhatsapp aria-hidden="true" />,
  },
  {
    href: "https://www.linkedin.com/in/anas-hisham-dev/",
    label: "Visit my LinkedIn profile",
    icon: <FaLinkedin aria-hidden="true" />,
  },
  {
    href: "https://github.com/Anas-hisham?tab=repositories",
    label: "Check out my GitHub projects",
    icon: <FaGithub aria-hidden="true" />,
    className: "end",
  },
];

function SocialMedia() {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 social">
      {socialLinks.map(({ href, label, icon, className }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={className || ""}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
