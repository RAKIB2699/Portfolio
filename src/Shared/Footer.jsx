import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] py-6 text-center text-gray-400 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
}
