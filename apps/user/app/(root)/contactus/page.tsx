"use client"
import * as React from "react";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { MaxWidthWrapper } from "@repo/ui/components/MaxWidthWrapper";

interface FormInputs {
    fullName: string;
    email: string;
    phoneNumber?: string;
    subject: string;
    message: string;
  }
  
  const ContactUsPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormInputs>();
    const messageInputWidth = watch("message") ? `${watch("message").length * 10}px` : "100%";
  
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
      console.log(data);
    };
  
    return (
        <MaxWidthWrapper>
      <div className=" mx-auto p-4">
        <div className="mb-8"> 
          <h1 className="text-2xl font-bold text-red-600">Contact Us</h1>
          <div className="border-t border-whitesmoke mt-4"></div> 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-primary-blue  w-full h-auto md:mt-16 md:w-[450px] md:h-[280px]">
            <p className="font-bold text-sm md:text-base text-white">DIRECTOR / REGIONAL DEPUTY DIRECTOR</p>
            <div className="mt-4 flex items-start gap-4 text-md md:text-md font-light">
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
            <div className="mt-4 flex gap-3 items-center">
              <Image
                src="/header/mail.svg"
                alt="Mail Icon"
                width={20}
                height={20}
                className="md:w-6 lg:w-5"
              />
              <p className="text-xxs md:text-[14px] lg:text-[16px] font-light text-white">
                officer@nationalyouthprogramme.in
              </p>
            </div>
          </div>
          <form className="space-y-2  w-full h-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center mb-4">
              <Image
                src="/contactus/drafts.svg"
                alt="Thumbnail"
                width={25}
                height={25}
                className="mr-2"
              />
              <h1 className="text-2xl font-bold text-red-600">Contact Us</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-primary-blue">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="mt-1 w-full h-12 px-4"
                  {...register("fullName", { required: "Full Name is required" })}
                />
                {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-blue">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="mt-1 w-full h-12 px-4"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-primary-blue">
                  Phone Number
                </label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Phone number"
                  className="mt-1 w-full h-12 px-4"
                  {...register("phoneNumber")}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-blue">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="mt-1 w-full h-12 px-4"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && <span className="text-red-500">{errors.subject.message}</span>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-blue">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
                rows={4}
                {...register("message", { required: "Message is required" })}
                style={{ width: messageInputWidth }}
              />
              {errors.message && <span className="text-red-500">{errors.message.message}</span>}
            </div>
            <div className="flex justify-end">
              <Button type="submit" variant="default" className="bg-primary-blue" size="default" style={{ width: "100%" }}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      </MaxWidthWrapper>
    );
  };
  
  export default ContactUsPage;