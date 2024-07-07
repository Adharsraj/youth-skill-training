"use client";
import * as React from "react";
import Image from "next/image";
import { MaxWidthWrapper } from "@repo/ui/components/MaxWidthWrapper";
import ContactForm from "../../components/contactform";
const ContactUsPage: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <div className="max-w-6xl mx-auto p-4">
        <div className="mb-8">
          <h1 className="lg:text-2xl md:text-xl text:md font-bold text-red-600">Contact Us</h1>
          <div className="border-t border-whitesmoke mt-4 mb-8"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-2 bg-primary-blue w-full md:w-[660px] md:h-[300px] lg:w-[380px] lg:h-[260px] h-auto lg:mt-[100px]">
            <p className="font-bold text-sm md:text-xl lg:ml-0 md:ml-[60px] text-white">DIRECTOR / REGIONAL DEPUTY DIRECTOR</p>
            <div className="mt-4 flex items-start gap-4 text-xs lg:ml-0 md:ml-[60px] md:text-lg lg:text-xs font-light">
              <Image
                src="/footer/location.svg"
                alt="Location Icon"
                width={20}
                height={20}
                className="w-3 md:w-4"
              />
              <div className="space-y-1 text-white">
                <p>Directorate Office</p>
                <p>Youth Employability Skill Training</p>
                <p>686A-Indra Park</p>
                <p>Main Road, Palam</p>
                <p>New Delhi 45</p>
              </div>
            </div>
            <div className="mt-4 flex gap-3 items-center lg:ml-0 md:ml-[60px]">
              <Image
                src="/header/mail.svg"
                alt="Mail Icon"
                width={20}
                height={20}
                className="md:w-6 lg:w-5"
              />
              <p className="text-xxs md:text-lg lg:text-xs lg:ml-0 font-light text-white">
                officer@nationalyouthprogramme.in
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="p-8 border border-gray-300 w-full md:w-[280px] lg:w-[250px]">
            <p className="font-bold text-xs">REGIONAL DIRECTOR / DEPUTIVE OFFICER</p>
            <div className="flex items-start gap-2 mt-2">
              <Image
                src="/contactus/loc.svg"
                alt="Location Icon"
                width={20}
                height={20}
                className="w-3 md:w-4"
              />
              <div className="text-xs">
                <p>Regional Office & Training Centre </p>
                <p>Youth Employability Skill Training </p>
                <p>154/20, 3rd Floor,</p>
                <p> Royal Space  HSR Layout</p>
                <p>Bommanahalli, Bangalore</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs md:text-sm font-light">
              <Image
                src="/contactus/call.svg"
                alt="Call Icon"
                width={20}
                height={20}
                className="w-3 md:w-4"
              />
              <div className="flex flex-col space-y-1">
                <p>+91 98765 43210</p>
                <p>+91 87654 32109</p>
              </div>
            </div>
          </div>
          <div className="p-8 border border-gray-300 w-full md:w-[280px] lg:w-[250px]">
            <p className="font-bold text-xs">REGIONAL DIRECTOR / DEPUTIVE OFFICER</p>
            <div className="flex items-start gap-2 mt-2">
              <Image
                src="/contactus/loc.svg"
                alt="Location Icon"
                width={20}
                height={20}
                className="w-3 md:w-4"
              />
              <div className="text-xs">
                <p>Regional Office & Training Centre</p>
                <p>Youth Employability Skill Training</p>
                <p>2 nd Floor Revenue Tower, </p>
                <p>Adoor,Kerala</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs md:text-sm font-light">
              <Image
                src="/contactus/call.svg"
                alt="Call Icon"
                width={20}
                height={20}
                className="w-3 md:w-4"
              />
              <div className="flex flex-col space-y-1">
                <p>04734-227005</p>
                <p>04734-292905</p>
              </div>
            </div>
          </div>
          <div className="p-8 border border-gray-300 w-full md:w-[280px] lg:w-[250px]">
            <p className="font-bold text-xs">PROGRAMME OFFICER</p>
            <div className="flex items-start gap-2 mt-2">
              <Image
                src="/contactus/loc.svg"
                alt="Location Icon"
                width={20}
                height={20}
                className="w-3 md:w-4"
              />
              <div className="text-xs">
                <p>Sub -Regional Administrative Office </p>
                <p>Indira Nager, Adayar,</p>
                <p>Chennai 600020</p>
              </div>
            </div>
          </div>
          <div className="p-8 border border-gray-300 w-full md:w-[280px] lg:w-[250px]">
            <p className="font-bold text-xs">PROGRAMME OFFICER SUB</p>
            <div className="flex items-start gap-2 mt-2">
              <Image
                src="/contactus/loc.svg"
                alt="Location Icon"
                width={20}
                height={20}
                className="w-3 md:w-4"
              />
              <div className="text-xs">
                <p>Regional Administrative Office </p>
                <p>West Palace Road </p>
                <p>Thrissur 680022</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs md:text-sm font-light">
              <Image
                src="/contactus/call.svg"
                alt="Call Icon"
                width={20}
                height={20}
                className="w-3 md:w-4"
              />
              <div className="flex flex-col space-y-1">
                <p>0487-2983305</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactUsPage;
