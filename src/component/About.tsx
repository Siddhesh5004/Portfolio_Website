
import { Building2 } from "lucide-react";
import './animation.css';

function About() {
  const details = [
    { Icon: Building2, text: "Sinhgad College of Engineering, Pune" },
    { Icon: Building2, text: "Current CGPA: 7.35" },
  ];

  return (
    <section className="bg-[#151923] p-6 rounded-lg animate-fade-in">
      <div className="relative inline-block mb-4">
        <h2 className="text-xl font-bold animate-slide-down">About Me</h2>
        <div className="absolute bottom-[-4px] left-0 w-[68%] h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" />
      </div>
      <p className="text-gray-400 mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Hi there! 👋 I am results-driven IT professional specializing in cloud technologies and software development. Successfully architected
and deployed multiple cloud-based solutions using AWS and Azure, demonstrating proficiency in serverless
computing, data engineering, and automated systems. Strong foundation in Java programming, database
management, and security best practices. Eager to contribute technical expertise and innovative problem-solving
skills to drive digital transformation initiatives
      </p>
      <div className="space-y-2">
        {details.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 animate-slide-right"
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <item.Icon className="w-4 h-4" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;



