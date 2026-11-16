
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiArrowUpRight,
} from "react-icons/fi";

// Personal Contact Information
const contactInfo = {
  email: "ummeaymanatika@gmail.com",
  phone: "01560030907",
  whatsapp: "8801993236716",
};

const Contact = () => {
  const contacts = [
    {
      title: "Email Me",
      value: contactInfo.email,
      description: "Feel free to send me an email anytime.",
      icon: FiMail,
      link: `mailto:${contactInfo.email}`,
    },
    {
      title: "Call Me",
      value: contactInfo.phone,
      description: "Let's discuss your project or opportunity.",
      icon: FiPhone,
      link: `tel:${contactInfo.phone}`,
    },
    {
      title: "WhatsApp",
      value: "01993236716",
      description: "You can also reach me directly on WhatsApp.",
      icon: FiMessageCircle,
      link: `https://wa.me/${contactInfo.whatsapp}`,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-slate-800 bg-slate-950 px-4 py-24 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gradient-to-r from-indigo-500 to-violet-500" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            I'm always open to discussing new projects, creative ideas,
            and opportunities. Feel free to get in touch with me!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.title}
                href={contact.link}
                target={
                  contact.title === "WhatsApp"
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.title === "WhatsApp"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-500/60 hover:bg-slate-900"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
                  <Icon size={27} />
                </div>

                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {contact.title}
                  </h3>

                  <FiArrowUpRight
                    size={20}
                    className="text-slate-500 transition group-hover:text-indigo-400"
                  />
                </div>

                <p className="mb-4 break-all text-sm font-medium text-indigo-300">
                  {contact.value}
                </p>

                <p className="text-sm leading-6 text-slate-400">
                  {contact.description}
                </p>
              </a>
            );
          })}

        </div>

        {/* Bottom Message */}
        <div className="mt-12 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 p-8 text-center">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Have a project in mind?
          </h3>

          <p className="mt-3 text-slate-400">
            Let's turn your ideas into something amazing.
          </p>

          <a
            href={`mailto:${contactInfo.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            Say Hello <FiArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
