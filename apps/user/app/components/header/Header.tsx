'use client'

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatedHamburgerButton } from "@repo/ui/components/HamMenu";
import Image from "next/image";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCloseDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header>
      {/* sub header */}
      <section className="bg-primary-blue">
        <div className="flex justify-between items-center py-2 px-4">
          <div onClick={() => setOpen(!open)} className="md:hidden">
            <AnimatedHamburgerButton open={open} />
          </div>
          <div className="md:hidden">
            <Image
              src="/header/person.svg"
              height={25}
              width={25}
              alt="personLogo"
            />
          </div>
          <div className="hidden md:flex justify-start md:text-[8px] lg:text-[14px] w-full md:space-x-8 lg:space-x-14 ml-8">
            <div className="flex items-center space-x-2">
              <Image
                src="/header/call.svg"
                height={20}
                width={20}
                alt="phoneIcon"
              />
              <span className="text-white">Call On : 1800 123 000</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image
                src="/header/schedule.svg"
                height={20}
                width={20}
                alt="clockIcon"
              />
              <span className="text-white">Mon-Fri (9.30 AM - 5.30 PM)</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image
                src="/header/mail.svg"
                height={20}
                width={20}
                alt="emailIcon"
              />
              <span className="text-white">Email : secretary@nyptyest.in</span>
            </div>
            <div className="flex space-x-4">
              <button className="bg-orange-500 text-white px-6 py-2 rounded">
                Student Certificate Verification
              </button>
              <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
                <Image
                  src="/header/person.svg"
                  height={20}
                  width={20}
                  alt="personIcon"
                />
                <span className="ml-2">Login</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* main header */}
      <section className="bg-white shadow-md">
        <div className="flex justify-between items-center py-4 px-1">
          {/* Logo and H1 */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/header/leftlogo.svg"
                height={20} 
                width={80}   
                alt="Logo"
                className="cursor-pointer"
              />
              <div>
                <h1 className="text-[10px] md:text-[10px] lg:text-[16px] font-bold">YOUTH <br/>EMPLOYABILITY<br/> SKILL TRAINING.</h1>
                <p className="text-[5px] md:text-[5px] lg:text-[7px]">UNDER THE AEGIS MINISTRY OF <br/>CO-OPERATION (MSCS Act 2002)<br/> GOVERNMENT OF INDIA.</p>
              </div>
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex items-center md:text-[8px] lg:text-[18px] lg:gap-8 md:gap-3">
              <a href="/" className="text-gray-800 hover:text-blue-500">Home</a>
              <div className="relative" onMouseLeave={handleCloseDropdown}>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-500"
                  onClick={handleDropdownToggle}
                >
                  Education & Training &#9662;
                </a>
                {dropdownOpen && (
                  <div className="absolute bg-white shadow-md  py-2 w-40 rounded-md">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Courses
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Certifications
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-800 hover:text-blue-500">About</a>
              <a href="#" className="text-gray-800 hover:text-blue-500">News</a>
              <a href="#" className="text-gray-800 hover:text-blue-500">Gallery</a>
              <a href="#" className="text-gray-800 hover:text-blue-500">Sectors</a>
              <a href="#" className="text-gray-800 hover:text-blue-500">Contact</a>
            </nav>
          </div>
          {/* Images */}
          <div className="hidden md:flex lg:justify-end md:space-x-2 lg:space-x-10">
            <div className="md:w-1/2 lg:w-auto flex justify-end">
              <Image
                src="/header/akam.svg"
                height={20}
                width={60}
                alt="Image1"
              />
            </div>
            <div className="md:w-1/2 lg:w-auto flex justify-end">
              <Image
                src="/header/g20.svg"
                height={20}
                width={50}
                alt="Image2"
              />
            </div>
            <div className="md:w-1/2 lg:w-auto flex justify-end">
              <Image
                src="/header/swach.svg"
                height={20}
                width={50}
                alt="Image3"
              />
            </div>
            <div className="md:w-1/2 lg:w-auto flex justify-end">
              <Image
                src="/header/msme.svg"
                height={20}
                width={50}
                alt="Image4"
              />
            </div>
          </div>
          {/* Mobile Images */}
          <div className="md:hidden grid grid-cols-2 gap-4 justify-end">
            <div className="flex justify-end">
              <Image
                src="/header/akam.svg"
                height={20}
                width={40}
                alt="Image1"
              />
            </div>
            <div className="flex justify-end">
              <Image
                src="/header/g20.svg"
                height={20}
                width={40}
                alt="Image2"
              />
            </div>
            <div className="flex justify-end">
              <Image
                src="/header/swach.svg"
                height={20}
                width={40}
                alt="Image3"
              />
            </div>
            <div className="flex justify-end">
              <Image
                src="/header/msme.svg"
                height={20}
                width={40}
                alt="Image4"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

