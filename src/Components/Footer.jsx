// src/components/Footer.jsx

import React from "react";
import { footerContent } from "../Constants"; // Ensure the path is correct

const Footer = () => (
  <footer id="Footer" className="border-t border-neutral-700 py-10 mt-20 ">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 ">
      {footerContent.map((Link, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3  mb-6">
          <h3 className="text-md font-semibold mb-4">{Link.heading}</h3>
          <ul className="space-y-2">
            {Link.items.map((item, idx) => (
              <li key={idx} className="mb-2">
                <a
                  href={item.link}
                  className="text-neutral-300 hover:text-white"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} CodeCraft. All rights reserved.</p>
      </div>
    </div>
    <div className="mt-2 text-end">Made by Nitesh ❤️</div>
  </footer>
);

export default Footer;
