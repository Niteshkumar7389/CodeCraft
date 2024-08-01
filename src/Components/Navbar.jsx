import Logo from "../assets/logo.jpg";
import { navItems } from "../Constants/index.js";
import { IoMenu } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawer);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items center">
          <div className="flex item-center flex-shrink-0">
            <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
            <span className="text-xl tracking-tight">CodeCraft</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-600 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex justify-end flex-col">
            <button onClick={toggleNavbar}>
              {mobileDrawer ? <MdClear /> : <IoMenu />}
            </button>
          </div>
        </div>
        {mobileDrawer && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-600 to-orange-800 py-2 px-3 rounded-md"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
