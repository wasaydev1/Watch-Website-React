import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_d81tmx4',    // replace with your actual service ID
      'template_njplc8r',   // replace with your actual template ID
      form.current,
      '22Xj3ydIfCHL0bEdX'     // replace with your actual public key
    )
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        toast.error("Failed to send message.");
      });

    e.target.reset(); // Reset form after submission
  };


  return (
    <div className="flex flex-col lg:flex-row p-8 bg-white text-gray-800">
      {/* Left Section: Get in Touch Form */}
      <div className="lg:w-2/3 lg:pr-12 mb-8 lg:mb-0">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Get in Touch</h2>

        {/* 👇 Connect form ref & onSubmit */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <textarea
              name="message" // 👈 required for emailjs
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y min-h-[150px]"
              placeholder="Enter Message"
              required
            ></textarea>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name" // 👈 required
              className="w-full md:w-1/2 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              name="email" // 👈 required
              className="w-full md:w-1/2 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="subject" // 👈 optional, if you want it in your template
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Subject"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white py-3 px-8 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            SEND
          </button>
        </form>
      </div >

      {/* Right Section: Contact Information */}
      <div className="lg:w-1/3 space-y-8">
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h3v-9a2 2 0 00-2-2H9a2 2 0 00-2 2v9h3m-3 9l3-3m-3 3h3v-3"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-700">Malir Jinnah Sqaure </p>
            <p className="text-gray-500 text-sm">Near Hanfia Masjid</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-700">+92 318 215 839 8</p>
            <p className="text-gray-500 text-sm">Mon to Sun 24 Hours Services</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4m-2 0h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-700">wasay.dev1@gmail.com</p>
            <p className="text-gray-500 text-sm">Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;