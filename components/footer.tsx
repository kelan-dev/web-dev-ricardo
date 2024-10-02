import React from "react";

const Footer = () => {
  return (
    <footer className="m-auto mb-10 flex max-w-[30rem] flex-col items-center justify-center px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Me. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Built with</span> React • Next.js (App
        Router, Server Actions) • TypeScript • Tailwind CSS • Framer Motion •
        React Email & Resend • Vercel Hosting
      </p>
    </footer>
  );
};

export default Footer;
