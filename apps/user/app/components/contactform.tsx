"use client";
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";

interface FormInputs {
  fullName: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormInputs>();
  const messageInputWidth = watch("message") ? `${watch("message").length * 10}px` : "100%";

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-2 md:w-[650px] md:h-[auto] w-full h-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex md:justify-center lg:justify-start">
        <div className="flex lg:items-center mb-4">
          <Image
            src="/contactus/drafts.svg"
            alt="Thumbnail"
            width={25}
            height={25}
            className="mr-2"
          />
          <h1 className="md:text-2xl text-lg font-bold text-red-600">Contact Us</h1>
        </div>
      </div>
      <div className="border-t border-whitesmoke mt-4 mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-primary-blue">
            Full Name
          </label>
          <Input
            id="fullName"
            type="text"
            placeholder="Full Name"
            className="mt-1 w-full h-12 px-4 rounded-none"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
        </div>
        <div className="mt-2">
          <label htmlFor="email" className="block text-sm font-medium text-primary-blue">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Email address"
            className="mt-1 w-full h-12 px-4 rounded-none"
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
            className="mt-1 w-full h-12 px-4 rounded-none"
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
            className="mt-1 w-full h-12 px-4 rounded-none"
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
          className="mt-1 block w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
          rows={4}
          {...register("message", { required: "Message is required" })}
          style={{ width: messageInputWidth }}
        />
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      </div>
      <div className="flex justify-end">
        <Button type="submit" variant="default" className="bg-primary-blue rounded-none" size="default" style={{ width: "100%" }}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
