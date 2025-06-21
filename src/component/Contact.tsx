import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './animation.css';

function Contact({ isMobile }: { isMobile: boolean }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  
    if (serviceId && templateId && userId) {
      emailjs.send(serviceId, templateId, formData, userId)
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setIsSubmitted(true);
          },
          (error) => {
            console.log('FAILED...', error);
            alert('Message sending failed. Please try again later.');
          }
        );
    } else {
      console.error('EmailJS environment variables are not set');
      alert('Message sending failed. Please try again later.');
    }
  
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <section
      className={`bg-[#151923] p-6 rounded-lg ${isMobile ? 'md:hidden' : 'hidden md:block'} animate-fade-in`}
      style={{ animationDelay: isMobile ? '0.4s' : '0.3s' }}
    >
      {/* Title with gradient underline */}
      <div className="relative mb-6">
        <h2 className="text-xl font-bold">Contact</h2>
        <div className="absolute bottom-[-4px] left-0 w-[20%] h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" />
      </div>

      {/* Contact email above form */}
      <div className="mb-6 text-gray-300">
        <p>
          Feel free to reach out if you have any questions or need assistance. I'm always happy to connect and discuss ideas, projects, or opportunities.
        </p>
        <p className="mt-4">
          You can email me directly at: <a href="bhelkesiddhesh@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">bhelkesiddhesh@gmail.com</a>
        </p>
        <p className="mt-4">
          Or send me a message using the form below:
        </p>
      </div>

      {isSubmitted ? (
        <div className="bg-green-500 text-white p-4 rounded-lg">
          <p>Your message has been sent!</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {[{ label: 'Name', type: 'text', name: 'name', placeholder: 'Your name' },
            { label: 'Email', type: 'email', name: 'email', placeholder: 'your@email.com' }].map((field, index) => (
            <div key={index}>
              <label className="block text-sm mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                className="w-full bg-[#0a0d16] rounded p-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleInputChange}
              />
            </div>
          ))}
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              className="w-full bg-[#0a0d16] rounded p-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
              rows={4}
              placeholder="Your message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
