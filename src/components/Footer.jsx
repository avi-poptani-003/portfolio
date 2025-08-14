import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-[2] py-8 text-center text-sm opacity-70">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Avi Poptani. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
