"use client"
import React, { useState } from 'react';
import { Input } from '@repo/ui/components/ui/input';
import ImageUpload from '../../components/imageupload';
import { Label } from '@repo/ui/components/ui/label';
import { Button } from '@repo/ui/components/ui/button';

const StudentVerification: React.FC = () => {
  const [certificateImage, setCertificateImage] = useState<File | null>(null);
  const [marklistImage, setMarklistImage] = useState<File | null>(null);

  const handleCertificateUpload = (file: File | null) => {
    setCertificateImage(file);
  };

  const handleMarklistUpload = (file: File | null) => {
    setMarklistImage(file);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <h1 className="lg:text-2xl md:text-xl text-md font-bold mb-6 text-red-600">Student Certificate Verification</h1>
      <div className="border-t border-whitesmoke mt-4 mb-8 text-xxs lg:text-lg"></div>
      <Label className="block">Registration Number</Label>
      <div className="flex flex-col lg:flex-row lg:items-center mb-6 mt-2">
        <Input type="text" className="mb-2 lg:mr-2 w-full lg:w-[700px]" placeholder="Type" />
        <Button className="bg-primary-blue w-full lg:w-auto mb-2 lg:mb-0">Search</Button>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Label className="block">Student Name</Label>
            <Input type="text" className="mt-1" placeholder="Student Name" />
          </div>
          <div>
            <Label className="block">Registration Number</Label>
            <Input type="text" className="mt-1" placeholder="Registration Number" />
          </div>
          <div>
            <Label className="block">Course Name</Label>
            <Input type="text" className="mt-1" placeholder="Course Name" />
          </div>
          <div>
            <Label className="block">District</Label>
            <Input type="text" className="mt-1" placeholder="District" />
          </div>
          <div>
            <Label className="block">Month & Year</Label>
            <Input type="text" className="mt-1" placeholder="Month & Year" />
          </div>
          <div>
            <Label className="block">College Name</Label>
            <Input type="text" className="mt-1" placeholder="College Name" />
          </div>
          <div className="flex flex-col lg:place-items-start">
            <ImageUpload label="" onImageUpload={handleCertificateUpload} />
            <Label className="block mt-2 text-center lg:text-left">Certificate Image</Label>
          </div>
          <div className="flex flex-col lg:place-items-start">
            <ImageUpload label="" onImageUpload={handleMarklistUpload} />
            <Label className="block mt-2 text-center lg:text-left">Marklist Image</Label>
          </div>
        </div>

        <h2 className="lg:text-xl md:text-lg text-md font-bold mb-4">Exam Result Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="">
            <Label className="block">Result Status</Label>
            <Input type="text" className="mt-1" placeholder="Result Status" />
          </div>
          <div className="">
            <Label className="block">Total Mark Obtained</Label>
            <Input type="text" className="mt-1" placeholder="Total Mark Obtained" />
          </div>
          <div className=" md:col-span-2">
            <Label className="block">Total Mark</Label>
            <Input type="text" className="mt-1 w-full" placeholder="/" />
          </div>
          <div className="">
            <Label className="block">Mark Entry Clerk Name</Label>
            <Input type="text" className="mt-1" placeholder="Clerk Name" />
          </div>
          <div className="">
            <Label className="block">Status</Label>
            <Input type="text" className="mt-1" placeholder="Status" />
          </div>
          <div className="">
            <Label className="block">Result Checking Officer Name</Label>
            <Input type="text" className="mt-1" placeholder="Result Checking Officer Name" />
          </div>
          <div className="">
            <Label className="block">Status</Label>
            <Input type="text" className="mt-1" placeholder="Status" />
          </div>
          <div className="">
            <Label className="block">Final Verified Officer Name</Label>
            <Input type="text" className="mt-1" placeholder="Final Verified Officer Name" />
          </div>
          <div className="">
            <Label className="block">Status</Label>
            <Input type="text" className="mt-1" placeholder="Status" />
          </div>
          <div className="mb-2 md:col-span-2">
            <Label className="block">Officer Register Book Number</Label>
            <Input type="text" className="mt-1 w-full" placeholder="Officer Register Book Number" />
          </div>
        </div>
    </div>
  );
};

export default StudentVerification;
