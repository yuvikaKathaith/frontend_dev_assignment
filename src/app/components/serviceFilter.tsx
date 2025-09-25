"use client";
import React from "react";

interface ServiceFilterProps {
  services: string[];
  selectedService: string;
  onChange: (service: string) => void;
}

export default function ServiceFilter({
  services,
  selectedService,
  onChange,
}: ServiceFilterProps) {
  return (
    <select
      value={selectedService}
      onChange={(e) => onChange(e.target.value)}
      className="rounded px-5 py-1 border border-gray-400"
    >
      <option value="all">All Services</option>
      {services.map((service) => (
        <option key={service} value={service}>
          {service}
        </option>
      ))}
    </select>
  );
}