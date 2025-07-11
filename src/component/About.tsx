
import { Building2 } from "lucide-react";
import './animation.css';

function About() {
  const details = [
    { Icon: Building2, text: "Sinhgad College of Engineering, Pune" },
    { Icon: Building2, text: "Current CGPA: 7.54" },
  ];

  return (
    <section className="bg-[#151923] p-6 rounded-lg animate-fade-in">
      <div className="relative inline-block mb-4">
        <h2 className="text-xl font-bold animate-slide-down">About Me</h2>
        <div className="absolute bottom-[-4px] left-0 w-[68%] h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" />
      </div>
      <p className="text-gray-400 mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Recent B.E. graduate in IT with hands-on experience in AWS and Azure. Built cloud-native projects using
Lambda, SES, EventBridge, and Azure Data Factory. Skilled in Java, Bash, SQL, Git, and Docker. Certified in
Azure Fundamentals (AZ-900), passionate about cloud infrastructure and automation. Seeking entry-level roles in
Cloud or DevOps engineering
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



