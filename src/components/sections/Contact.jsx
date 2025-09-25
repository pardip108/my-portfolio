import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    emailjs
      .sendForm(
        'service_e02lpxl',
        'template_h8lm8cz',
        form.current,
        '5moGpZOvGSKA37Vl8'
      )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('Message sent successfully!');
          form.current.reset();
        })
        .catch((error) => {
          console.error('FAILED...', error.text);
          setStatus('Failed to send message. Please try again.');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
  };

  return (
    <div className=" py-16 px-4 "> 
     

      <div className="max-w-lg mx-auto bg-gray-700 p-8 rounded-2xl shadow-lg">
        <h2 className="text-6xl font-bold text-white mb-6 text-center">
          Get in Touch
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Write your message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'
            } text-white font-semibold py-2 px-4 rounded-lg transition duration-300`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {status && (
            <div className={`mt-4 text-center ${status.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
