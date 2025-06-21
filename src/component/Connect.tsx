import { Github, Twitter, Linkedin } from "lucide-react";
import './animation.css';

function Connect() {
  const socialLinks = [
    { Icon: Github, url: "https://github.com/Siddhesh5004" },
    // { Icon: Twitter, url: "https://twitter.com/leoomkar" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/siddhesh-bhelke-831ab7237/" },
  ];

  return (
    <section className="bg-[#151923] p-6 rounded-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-xl font-bold mb-4 animate-slide-down">Connect</h2>
      <div className="flex gap-4">
        {socialLinks.map(({ Icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition animate-scale-up"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Connect;
