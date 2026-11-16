
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      link: "https://github.com/umme-ayman29",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      link: "https://www.linkedin.com/in/atika29/",
    },
    {
      name: "Facebook",
      icon: FiFacebook,
      link: "https://www.facebook.com/umme.ayman.atika",
    },
  ];

  const navigationLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Education", link: "#education" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 pt-16 pb-8 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Personal Information */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold text-white"
            >
              Umme Ayman{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Atika
              </span>
            </a>

            <p className="mt-4 text-sm font-medium text-indigo-400">
              Full Stack Web Developer
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Passionate about building modern, responsive,
              and user-friendly web applications.
              Always learning and exploring new technologies.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-400 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-sm text-slate-400 transition hover:text-indigo-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Get In Touch
            </h3>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Have a question, project idea, or collaboration
              opportunity? I'd love to hear from you.
            </p>

            <a
              href="mailto:ummeaymanatika@gmail.com"
              className="mt-5 inline-flex items-center gap-2 break-all text-sm text-indigo-400 transition hover:text-indigo-300"
            >
              <FiMail size={18} />
              ummeaymanatika@gmail.com
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-slate-500">
            © {currentYear} Umme Ayman Atika Khatun.
            All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Designed & Built with{" "}
            <span className="font-semibold text-indigo-400">
              Next.js
            </span>{" "}
            & Tailwind CSS
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
          >
            <FiArrowUp size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
