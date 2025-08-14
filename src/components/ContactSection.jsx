import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="relative z-[3] py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center drop-shadow-sm">
          Get in Touch
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg opacity-80 leading-relaxed mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <a
            href="mailto:avipoptani34@gmail.com" // Replace with your actual email address
            className="inline-block bg-slate-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg relative z-10 transition-all duration-300 cursor-pointer text-sm sm:text-base border border-yellow-400/20 hover:border-yellow-400/50 hover:bg-slate-700 hover:shadow-lg hover:shadow-yellow-400/20"
          >
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;