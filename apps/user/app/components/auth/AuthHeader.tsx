"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatedHamburgerButton } from "@repo/ui/components/HamMenu";
import Image from "next/image";
import { MaxWidthWrapper } from "@repo/ui/components/MaxWidthWrapper";
import { Button } from "@repo/ui/components/ui/button";

export const AuthHeader: React.FC = () => {
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
    
    </header>
  );
};
