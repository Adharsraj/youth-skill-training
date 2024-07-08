"use client";

import React, { useState } from "react";
import { Label } from "@repo/ui/components/ui/label";
import { Button } from "@repo/ui/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@repo/ui/components/ui/select";

const PaymentPage: React.FC = () => {
  const [selectedFeeType, setSelectedFeeType] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <h1 className="lg:text-2xl md:text-xl text-md font-bold mb-6 text-red-600">
        Online Payment
      </h1>
      <div className="border-t border-whitesmoke mt-4 mb-8 text-xxs lg:text-lg"></div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="lg:w-1/2">
          <img
            src="/payment/payment.svg"
            alt="Payment"
            className="w-full h-[500px]"
          />
        </div>
        <div className="lg:w-1/2">
          <form className="space-y-6">
            <div>
              <Label className="block">College Name</Label>
              <input
                type="text"
                className="mt-1 w-full border p-2 rounded-none"
                placeholder="College Name"
              />
            </div>
            <div>
              <Label className="block">Type of Fee</Label>
              <Select onValueChange={(value) => setSelectedFeeType(value)}>
                <SelectTrigger className="mt-1 rounded-none">
                  <SelectValue placeholder="Select Fee Type" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  <SelectItem value="tuition">Tuition</SelectItem>
                  <SelectItem value="hostel">Hostel</SelectItem>
                  <SelectItem value="exam">Exam</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {selectedFeeType === "others" && (
              <div>
                <Label className="block">Type of Fee (Others)</Label>
                <input
                  type="text"
                  className="mt-1 w-full border p-2 rounded-none"
                  placeholder="Specify Fee Type"
                />
              </div>
            )}
            <div>
              <Label className="block">Date</Label>
              <div className="flex space-x-2">
                <Select onValueChange={(value) => setSelectedDay(value)}>
                  <SelectTrigger className="mt-1 w-1/3 rounded-none">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned">
                    {Array.from({ length: 31 }, (_, i) => (
                      <SelectItem key={i} value={`${i + 1}`}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select onValueChange={(value) => setSelectedMonth(value)}>
                  <SelectTrigger className="mt-1 w-1/3 rounded-none">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned">
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem key={i} value={`${i + 1}`}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select onValueChange={(value) => setSelectedYear(value)}>
                  <SelectTrigger className="mt-1 w-1/3 rounded-none">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned">
                    {Array.from({ length: 50 }, (_, i) => (
                      <SelectItem key={i} value={`${2024 - i}`}>
                        {2024 - i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label className="block">Remarks</Label>
              <input
                type="text"
                className="mt-1 w-full border p-2 rounded-none"
                placeholder="Remarks"
              />
            </div>
            <div>
              <Label className="block">Transaction ID</Label>
              <input
                type="text"
                className="mt-1 w-full border p-2 rounded-none"
                placeholder="Transaction ID"
              />
            </div>
            <div className="mt-6">
              <Button type="submit" className="w-full bg-primary-blue">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
