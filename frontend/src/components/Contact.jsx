import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9xyh9hy',     
      'template_1r5a25a',    
      form.current,
      '2pZXMe59eD2JiZmGY'         
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset(); 
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section id="contact" className="bg-[#1c1c1c] text-white px-8 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b-2 inline-block border-lime-300 mb-4">
            Contact Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Feel free to reach out for collaborations 😊.
          </p>
          <div className="space-y-4 text-gray-300 text-sm">
            <p><span className="font-semibold text-white">Address:</span> 503, Phase 1, Urban Estate, Dugri, Ludhiana</p>
            <p><span className="font-semibold text-white">Phone:</span> +91 9914322503</p>
            <p><span className="font-semibold text-white">Email:</span> harsimran12003@gmail.com</p>
            <p><span className="font-semibold text-white">GitHub:</span> <a href="https://github.com/Harsimran12003" target="_blank" rel="noopener noreferrer" className="text-lime-300 hover:underline">Harsimran12003</a></p>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="user_name" placeholder="Your Name" className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none" required />
            <input type="email" name="user_email" placeholder="Your Email" className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none" required />
          <textarea name="message" placeholder="Your Message" rows="5" className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none" required></textarea>
          <button type="submit" className="bg-lime-300 text-black px-6 py-2 rounded font-semibold hover:bg-lime-400 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
