import { MaxWidthWrapper } from "@repo/ui/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-blue text-white py-8">
      <MaxWidthWrapper>
        <div className=" flex flex-col lg:flex-row ">
          <div className="mb-4 md:mb-0  max-w-[500px] md:mx-auto ">
            <p className="font-bold text-xxs md:text-sm lg:w-[80%] lg:text-[13px]  ">
              DIRECTOR / REGIONAL DEPUTY DIRECTOR
            </p>
            <div className="mt-6 flex items-start  gap-4 text-xxs md:text-[13px] lg:text-xxs  font-light  ">
              <Image
                width={13}
                height={10}
                src="/footer/location.svg"
                alt="Location Icon"
                className="items-start md:w-4 lg:w-3"
              />
              <div className="space-y-1.5 md:space-y-3 lg:space-y-2">
                <p>Directorate Office</p>
                <p>Youth Employability Skill Training</p>
                <p>686A-Indra Park</p>
                <p>Main Road, Palam</p>
                <p>New Delhi 45</p>
              </div>
            </div>
            <div className="mt-4 flex  gap-3 items-center">
              <Image
               width={20}
               height={20}
                src="/header/mail.svg"
                alt="Location Icon"
                className="md:w-6 lg:w-5"
              />
              <p className="text-xxs md:text-[14px] lg:text-[11px] font-light ">

              officer@nationalyouthprogramme.in
              </p>
            </div>
          </div>
          <div className="text-left mt-4  max-w-[600px] md:mx-auto md:py-7 lg:py-0 lg:mt-2">
            <div className="flex flex-col items-left ">
              <div className="md:flex  md:justify-center xl:gap-4">
                <div className="flex md:gap-6">

                <Image
                  width={10}
                  height={10}
                  src="/footer/leftlogo.svg"
                  alt="leftlogo"
                  className="h-16 md:h-20 lg:h-[74px] w-auto mr-1 md:block hidden"
                />
                <Image
                  width={10}
                  height={10}
                  src="/footer/rightlogo.svg"
                  alt="rightlogo"
                  className="h-16 md:h-20 lg:h-[74px] w-auto mr-1 md:block hidden"
                />
                </div>
                <div className="ml-4">
                  <p className="text-sm lg:text-lg">
                    Opening Hours
                  </p>
                  <div className="ml-0 mt-4">
                    <p className="text-xxs md:text-xs md:w-4/5 font-light ">
                      Office Working Time: Monday – Friday (9:30 AM to 5:30 PM)
                    </p>
                  
                  </div>
                  <div className="flex items-center  md:hidden mt-8">
                    <Image
                      width={10}
                      height={10}
                      src="/footer/leftlogo.svg"
                      alt="leftlogo"
                      className="h-14 lg:h-10 w-auto mr-1 sm:block lg:hidden"
                    />
                    <Image
                      width={10}
                      height={10}
                      src="/footer/rightlogo.svg"
                      alt="rightlogo"
                      className="h-14 lg:h-10 w-auto ml-2 sm:block lg:hidden"
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex md:justify-between mt-4 xl:px-20">
                <div className="text-center ">
                  <p className="text-gray-400 text-start  text-xxs py-3 md:text-xs lg:text-xxs">
                    Follow Us
                  </p>
                  <div className="flex  mt-2 gap-2">
                    <div className="h-9 w-9 md:h-12 md:w-12 xl:h-10 xl:w-10 rounded-full border border-gray-400 flex items-center justify-center ">
                      <Image
                        width={10}
                        height={10}
                        src="/footer/facebook.svg"
                        alt="Logo1"
                        className="h-3 md:h-4 w-auto"
                      />
                    </div>
                    <div className="h-9 w-9 md:h-12 md:w-12 xl:h-10 xl:w-10 rounded-full border border-gray-400 flex items-center justify-center ">
                      <Image
                        width={10}
                        height={10}
                        src="/footer/g+.svg"
                        alt="Logo2"
                        className="h-3 md:h-4 w-auto"
                      />
                    </div>
                    <div className="h-9 w-9 md:h-12 md:w-12 xl:h-10 xl:w-10 rounded-full border border-gray-400 flex items-center justify-center ">
                      <Image
                        width={10}
                        height={10}
                        src="/footer/insta.svg"
                        alt="Logo3"
                        className="h-3 md:h-4 w-auto"
                      />
                    </div>
                    <div className="h-9 w-9 md:h-12 md:w-12 xl:h-10 xl:w-10 rounded-full border border-gray-400 flex items-center justify-center ">
                      <Image
                        width={10}
                        height={10}
                        src="/footer/youtube.svg"
                        alt="Logo4"
                        className="h-3 md:h-4 w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2 md:mt-0 ">
                <p className="text-gray-400 text-start  text-xxs py-3 md:text-xs lg:text-xxs">
                    Let's Chat
                  </p>
                  <div className="flex justify-left mt-2 gap-2 ">
                    <div className="h-9 w-9 md:h-12 md:w-12 xl:h-10 xl:w-10 rounded-full border border-gray-400 flex items-center justify-center ">
                      <Image
                        width={10}
                        height={10}
                        src="/footer/stric.svg"
                        alt="ChatLogo1"
                        className="h-3 md:h-4 w-auto"
                      />
                    </div>
                    <div className="h-9 w-9 md:h-12 md:w-12 xl:h-10 xl:w-10 rounded-full border border-gray-400 flex items-center justify-center ">
                      <Image
                        width={10}
                        height={10}
                        src="/footer/telegram.svg"
                        alt="ChatLogo2"
                        className="h-3 md:h-4 w-auto"
                      />
                    </div>
                    <div className="h-9 w-9 md:h-12 md:w-12 xl:h-10 xl:w-10 rounded-full border border-gray-400 flex items-center justify-center ">
                      <Image
                        width={10}
                        height={10}
                        src="/footer/whatsapp.svg"
                        alt="ChatLogo3"
                        className="h-3 md:h-4 w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-[14px] md:text-lg xl:text-base xl:py-3">Total Visitors: 46748838</p>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
