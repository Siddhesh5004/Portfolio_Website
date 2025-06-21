import React from 'react';
import { Github } from 'lucide-react'; 
import './animation.css';
import QuickNoteImage from "./Images/Quick_Note.png";
import TaskImage from "./Images/task.png";
import BlogApp from "./Images/Blog.jpg";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AWS SES Email Marketing System",
      description: "Automated email marketing platform built with AWS Lambda, S3, and SES featuring scheduled campaigns and domain-verified delivery.",
      image: QuickNoteImage,
      githubLink: "https://github.com/Siddhesh5004/Cloud-Tech/tree/main/AWS-Email-Marketing" // Replace with actual GitHub link
    },
    {
      title: "Azure Data Engineering Project",
      description: "End-to-end Olympic data analytics pipeline using Azure Data Factory, Databricks, and Synapse Analytics for insights extraction.",
      image: TaskImage,
      githubLink: "https://github.com/Siddhesh5004/Cloud-Tech/tree/main/Azure-End-To-End-Data-Engineering-Project" // Replace with actual GitHub link
    },
    {
      title: "AWS Serverless Form Submission System",
      description: "Serverless web application with HTML5 frontend, API Gateway, and Lambda functions storing form data in DynamoDB.",
      image: BlogApp,
      githubLink: "https://github.com/Siddhesh5004/Cloud-Tech/tree/main/Serverless-Web-Application" // Replace with actual GitHub link
    },
    {
      title: "PortFolio",
      description: "Created a portfolio using Claude, OpenAI, and Vercel v0, which enhanced my knowledge of AI tools and deployment processes.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/Siddhesh5004/Portfolio_Website" // Replace with actual GitHub link
    }
  ];

  return (
    <section className="bg-[#151923] p-6 rounded-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
      
      <div className="relative mb-6">
      <h2 className="text-xl font-bold mb-6 animate-slide-down">Featured Projects</h2>
        <div className="absolute bottom-[-4px] left-0 w-[15%] h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-[#0d1119] p-6 rounded-lg border border-gray-800 animate-scale-up"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4 animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            />
            <h3 className="text-lg font-semibold mb-2 animate-slide-right" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 animate-fade-up" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
              {project.description}
            </p>
            <a
              href={project.githubLink} // Using the GitHub link from the project object
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition animate-fade-up"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice for opening in new tab
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


