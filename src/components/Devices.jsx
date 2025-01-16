import React, { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";

// Dropdown Component
const Dropdown = ({ isOpen, setIsOpen }) => {
  const dropdownRef = useRef(null);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-md"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2">
          <div className="absolute -top-2 right-4 w-4 h-4 rotate-45 border-l border-t border-gray-200 bg-white"></div>
          <div className="relative w-36 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
            <div className="py-1 px-4">
              <button
                onClick={handleItemClick}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                All devices
              </button>
              <button
                onClick={handleItemClick}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Dashboard
              </button>
              <button
                onClick={handleItemClick}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                xywz
              </button>
              <button
                onClick={handleItemClick}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-300"
              >
                My account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Header Component
const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">LOGO</div>
      <Dropdown isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  );
};

// Machine Details Component
const MachineDetails = ({ machineName, isMenuOpen, setIsMenuOpen, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-navy-900 border-b-2 border-navy-900 pb-2 mb-8 inline-block">
          {machineName}
        </h1>

        <div className="bg-white rounded-lg min-h-[400px]">
          {/* Machine details content will go here */}
        </div>
      </main>
    </div>
  );
};

// Main Dashboard Component
const DevicesDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState(null);

  const machines = [
    { id: 1, name: "Machine 1" },
    { id: 2, name: "Machine 1" },
    { id: 3, name: "Machine 1" },
    { id: 4, name: "Machine 1" },
    { id: 5, name: "Machine 1" },
    { id: 6, name: "Machine 1" },
    { id: 7, name: "Machine 1" },
    { id: 8, name: "Machine 1" },
  ];

  if (selectedMachine) {
    return (
      <MachineDetails
        machineName={selectedMachine.name}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onBack={() => setSelectedMachine(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-navy-900 border-b-2 border-navy-900 pb-2 mb-8 inline-block">
          All Devices
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {machines.map((machine) => (
            <div
              key={machine.id}
              className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center"
            >
              <span className="text-navy-900 text-lg font-medium">
                {machine.name}
              </span>
              <button
                onClick={() => {
                  setSelectedMachine(machine);
                  setIsMenuOpen(false);
                }}
                className="bg-teal-400 text-white px-6 py-2 rounded-md hover:bg-teal-500 transition-colors"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DevicesDashboard;
