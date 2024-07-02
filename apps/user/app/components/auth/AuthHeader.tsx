'use client'

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatedHamburgerButton } from "@repo/ui/components/HamMenu";
import Image from "next/image";

export const AuthHeader: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header>
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
          <div className="hidden md:flex justify-center w-full md:space-x-8 lg:space-x-12 ml-8">
            <div className="flex items-center space-x-2">
              <Image
                src="/header/call.svg"
                height={20}
                width={20}
                alt="phoneIcon"
              />
              <span className="text-white md:text-[7px] lg:text-[14px]">Call On : 1800 123 000</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image
                src="/header/schedule.svg"
                height={20}
                width={20}
                alt="clockIcon"
              />
              <span className="text-white md:text-[7px] lg:text-[14px]">Mon-Fri (9.30 AM - 5.30 PM)</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image
                src="/header/mail.svg"
                height={20}
                width={20}
                alt="emailIcon"
              />
              <span className="text-white md:text-[7px] lg:text-[14px]">Email : secretary@nyptyest.in</span>
            </div>
            <div className="flex space-x-6">
              <button className="bg-orange-500 text-white px-2 py-2 rounded md:text-[8px] lg:text-[14px]">
                Student Certificate Verification
              </button>
              <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
                <Image
                  src="/header/person.svg"
                  height={20}
                  width={20}
                  alt="personIcon"
                />
                <span className="ml-2 md:text-[7px] lg:text-[14px]">Login</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
