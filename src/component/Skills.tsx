
import './animation.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: "💻",
      title: "Programming & Scripting",
      skills: ["Java", "SQL", "Shell Scripting(Bash)", "Python", "", ""],
    },
    {
      icon: "☁️",
      title: "Cloud",
      skills: ["Amazon Web Services(AWS)", "Microsoft Azure"],
    },
    {
      icon: "🛠️",
      title: "DevOps & Tools",
      skills: ["Git","GitHub", "Docker(Basics)"],
    },
    {
     icon: "🛠️",
      title: "Operating System & Networking ",
      skills: ["Linux/Unix","Windows", "DNS", "VPN", "Load Balancer" ],
    },
  ];

  return (
    <section className="bg-[#151923] p-6 rounded-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
      {/* Title with gradient underline */}
      <div className="relative mb-6">
        <h2 className="text-xl font-bold animate-slide-down">
          Skills & Technologies
        </h2>
        <div className="absolute bottom-[-4px] left-0 w-[20%] h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="bg-[#0d1119] p-6 rounded-lg border border-gray-800 animate-scale-up"
            style={{ animationDelay: `${0.3 + categoryIndex * 0.1}s` }}
          >
            <div 
              className="flex items-center gap-2 mb-4 animate-slide-right" 
              style={{ animationDelay: `${0.4 + categoryIndex * 0.1}s` }}
            >
              <div className="w-5 h-5 text-blue-400">{category.icon}</div>
              <h3 className="font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#151923] rounded-full text-sm animate-fade-up"
                  style={{ animationDelay: `${0.5 + categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
