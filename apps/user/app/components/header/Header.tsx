"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatedHamburgerButton } from "@repo/ui/components/HamMenu";
import Image from "next/image";
import { MaxWidthWrapper } from "@repo/ui/components/MaxWidthWrapper";
import { Button } from "@repo/ui/components/ui/button";

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
        <MaxWidthWrapper className="lg:px-6">
          <div className="flex justify-between items-center py-2 xl:py-4">
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
            <div className="hidden md:flex justify-between   w-full">
              <div className="flex text-[8px] lg:text-xs xl:text-[13px]  gap-4 xl:gap-8 ">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/header/call.svg"
                    height={20}
                    width={14}
                    alt="phoneIcon "
                    className="lg:w-4 xl:w-5"
                  />
                  <span className="text-white whitespace-nowrap ">
                    Call On : 1800 123 000
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/header/schedule.svg"
                    height={20}
                    width={14}
                    alt="clockIcon"
                    className="lg:w-4 xl:w-5"

                  />
                  <span className="text-white whitespace-nowrap ">
                    Mon-Fri (9.30 AM - 5.30 PM)
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/header/mail.svg"
                    height={20}
                    width={14}
                    alt="emailIcon"
                    className="lg:w-4 xl:w-5"

                  />
                  <span className="text-white whitespace-nowrap ">
                    Email : secretary@nyptyest.in
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Button className="bg-primary-orange text-white  text-[8px] xl:text-[13px] lg:text-xs h-7 lg:h-9 xl:h-11 xl:w-[250px]">
                  Student Certificate Verification
                </Button>
                <Button
                  variant={"outline"}
                  className="flex items-center  bg-transparent lg:text-xs text-[8px] h-7 lg:h-9 xl:h-10 xl:w-28 "
                >
                  <Image
                    src="/header/person.svg"
                    height={20}
                    width={14}
                    alt="personIcon"
                    className="lg:w-4 xl:w-5"
                  />
                  <span className="ml-2 text-white">Login</span>
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* main header */}
      <MaxWidthWrapper className="lg:px-6">
        <div className=" py-2 px-1">
          {/* Logo and H1 */}
          <div className="flex  justify-between items-center">
            <div className="flex items-center space-x-1 xl:space-x-3">
              <Image
                src="/header/leftlogo.svg"
                height={20}
                width={40}
                alt="Logo"
                className="cursor-pointer lg:w-20"
              />
              <div className="w-28 lg:w-44 ">
                <h1 className="text-xs md:text-xxs  lg:text-base font-bold lg:leading-5 xl:text-xl xl:leading-6">
                  YOUTH EMPLOYABILITY SKILL TRAINING.
                </h1>
                <p className="text-[8px] md:text-[6px] font-light pt-1.5 lg:text-xxs">
                  UNDER THE AEGIS MINISTRY OF CO-OPERATION (MSCS Act 2002)
                  GOVERNMENT OF INDIA.
                </p>
              </div>
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex items-center md:text-[8px] lg:text-xs xl:text-sm xl:gap-5   md:gap-3 md:px-2">
              <a href="/" className="text-gray-800 hover:text-blue-500">
                Home
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                About
              </a>

              <div className="relative" onMouseLeave={handleCloseDropdown}>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
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
              <a href="#" className="text-gray-800 hover:text-blue-500">
                News
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Gallery
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Sectors
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Contact
              </a>
            </nav>
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-2 xl:gap-4">
              <div className="flex justify-end">
                <Image
                  src="/header/akam.svg"
                  height={20}
                  width={40}
                  alt="Image1"
                  className="lg:w-14 xl:w-16"
                />
              </div>
              <div className="flex justify-end">
                <Image
                  src="/header/g20.svg"
                  height={20}
                  width={40}
                  alt="Image2 "
                  className="lg:w-14 xl:w-16"
                />
              </div>
              <div className="flex justify-end">
                <Image
                  src="/header/swach.svg"
                  height={20}
                  width={40}
                  alt="Image3"
                  className="lg:w-14 xl:w-16"
                />
              </div>
              <div className="flex justify-end">
                <Image
                  src="/header/msme.svg"
                  height={20}
                  width={40}
                  alt="Image4"
                  className="lg:w-14 xl:w-16"
                />
              </div>
            </div>
          </div>
      
        </div>
      </MaxWidthWrapper>
    </header>
  );
};
