import React from "react";
import { Search, ChevronDown } from "lucide-react";
import logo from "../assets/max-logo.png";
import dashImg from "../assets/dashboard-img.png";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
// MAX Healthcare Logo SVG Component
const MaxLogo = () => (
  <div className="flex items-center space-x-2">
    <svg width="45" height="45" viewBox="0 0 45 45" className="text-[#00437B]">
      <path
        fill="currentColor"
        d="M22.5 0L29.86 8.6L41.29 6.89L37.5 18L45 25.36L33.64 29.14L31.93 40.57L20.82 36.78L13.46 44.18L9.68 32.82L-1.68 31.11L2.11 20L-5.29 12.64L6.07 8.86L7.78 -2.57L18.89 1.21L22.5 0Z"
      />
      <path
        fill="white"
        d="M22.5 5L27.86 11.6L36.29 10.89L33.5 19L39 24.36L30.64 27.14L29.93 35.57L21.82 32.78L16.46 39.18L13.68 30.82L5.32 30.11L8.11 22L2.71 16.64L11.07 13.86L11.78 5.43L19.89 8.21L22.5 5Z"
      />
    </svg>
    <div className="flex flex-col">
      <span className="text-[#00437B] text-2xl font-bold">MAX</span>
      <span className="text-[#00437B] text-sm font-medium">Healthcare</span>
    </div>
  </div>
);

// Medical Icons SVG Components
const MedicalCrossIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
    <circle
      cx="12"
      cy="12"
      r="11"
      stroke="#00437B"
      fill="none"
      strokeWidth="2"
    />
    <path d="M7 12h10M12 7v10" stroke="#00437B" strokeWidth="2" />
  </svg>
);

const OrthopedicsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
    <path
      d="M12 4v2M12 18v2M8 12h8"
      stroke="#00437B"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M10 7c0-1 1-2 2-2s2 1 2 2v10c0 1-1 2-2 2s-2-1-2-2V7z"
      stroke="#00437B"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
    <path
      d="M12 6l-8.5 8.5a4.5 4.5 0 006.364 6.364L12 19.5l2.136 1.364a4.5 4.5 0 006.364-6.364L12 6z"
      fill="none"
      stroke="#00437B"
      strokeWidth="2"
    />
  </svg>
);

const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
    <circle
      cx="12"
      cy="12"
      r="8"
      stroke="#00437B"
      fill="none"
      strokeWidth="2"
    />
    <path
      d="M12 8c2 0 4 1 4 4s-2 4-4 4-4-1-4-4 2-4 4-4z"
      stroke="#00437B"
      fill="none"
      strokeWidth="2"
    />
  </svg>
);

const GynaeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="8" r="6" stroke="#00437B" fill="none" strokeWidth="2" />
    <path d="M12 14v6m-3 -3h6" stroke="#00437B" strokeWidth="2" />
  </svg>
);
const NavItem = ({ text }) => (
  <div className="relative group">
    <button className="flex items-center font-semibold text-customNavy hover:text-[#475866] text-sm">
      {text}
      <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
    </button>
  </div>
);

const SpecialtyItem = ({ icon, title }) => (
  <div className="flex items-center space-x-4 group cursor-pointer">
    <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
    <span className="text-[#00437B] text-base font-medium group-hover:text-[#40BFB4] transition-colors">
      {title}
    </span>
  </div>
);

const MaxHealthcare = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img src={logo} alt="max-logo" className="w-40 md:w-60" />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <NavItem text="Hospitals" />
              <NavItem text="Treatments" />
              <NavItem text="Services" />
              <NavItem text="Academics" />
              <NavItem text="International Patients" />
              <NavItem text="Quick Enquiry" />

              <button className="text-gray-600 hover:text-gray-800">
                <Search className="w-5 h-5" />
              </button>

              <button className="bg-[#00437B] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-900 transition-colors whitespace-nowrap">
                Book an Appointment
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b z-50">
            <div className="px-4 py-2 space-y-4">
              <NavItem text="Hospitals" />
              <NavItem text="Treatments" />
              <NavItem text="Services" />
              <NavItem text="Academics" />
              <NavItem text="International Patients" />
              <NavItem text="Quick Enquiry" />
              <button className="w-full bg-[#00437B] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-900 transition-colors">
                Book an Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Specialties Section */}
      <div className="pt-8 px-4 md:px-16">
        {/* Emergency text */}
        <div
          className="hidden md:block fixed left-0 top-1/3 bg-[#E31837] text-white px-1 py-20 font-bold 
                      [writing-mode:vertical-lr] rotate-180 tracking-wider text-sm z-10"
        >
          E M E R G E N C Y
        </div>

        {/* Mobile Emergency Button */}
        <button className="md:hidden fixed left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#E31837] text-white px-3 py-2 rounded-lg font-bold">
          EMERGENCY
        </button>

        {/* Main content with grid and image */}
        <div>
          <h1 className="text-[#00437B] text-xl md:text-2xl font-bold pb-1 border-b-2 border-[#00437B] inline-block">
            Specialities & Procedures
          </h1>
          <hr className="w-full md:w-1/2" />

          <div className="flex flex-col md:flex-row mt-8">
            {/* Specialties section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[#40BFB4] text-lg md:text-xl font-medium mb-6 border-b-2 border-[#40BFB4] w-32 py-1">
                Specialities
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 md:gap-x-8 pr-0 md:pr-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <SpecialtyItem
                    icon={<MedicalCrossIcon />}
                    title="Cancer Care / Oncology"
                  />
                  <SpecialtyItem
                    icon={<OrthopedicsIcon />}
                    title="Orthopaedics & Joint Replacement"
                  />
                  <SpecialtyItem
                    icon={<HeartIcon />}
                    title="Cardiac Sciences"
                  />
                  <SpecialtyItem
                    icon={<MedicalCrossIcon />}
                    title="Pulmonology"
                  />
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <SpecialtyItem
                    icon={<MedicalCrossIcon />}
                    title="Nephrology"
                  />
                  <SpecialtyItem
                    icon={<MedicalCrossIcon />}
                    title="Gastroenterology"
                  />
                  <SpecialtyItem icon={<BrainIcon />} title="Neurosciences" />
                  <SpecialtyItem
                    icon={<GynaeIcon />}
                    title="Obstetrics And Gynaecology"
                  />
                </div>
              </div>
            </div>

            {/* Dashboard Image */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img
                src={dashImg}
                alt="dashBoard"
                className="rounded-lg w-full md:-mt-24 md:ml-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxHealthcare;
