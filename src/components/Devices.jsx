import React, { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown } from "lucide-react";

// FilterDropdown Component
const FilterDropdown = ({ filter, isOpen, onToggle, onSelect }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onToggle]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => onToggle(filter.name)}
        className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md bg-white"
      >
        <span>{filter.name}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="absolute -top-2 left-4 w-4 h-4 rotate-45 border-l border-t border-gray-200 bg-white"></div>
          <ul className="relative py-1">
            {filter.options.map((option) => (
              <li
                key={option}
                onClick={() => onSelect(filter.name, option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// MainDropdown Component
const MainDropdown = ({ isOpen, setIsOpen, onNavigate }) => {
  const dropdownRef = useRef(null);

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
          <div className="relative w-36 bg-white rounded-md shadow-lg border border-gray-200">
            <div className="py-1">
              {[
                { label: "All devices", action: () => onNavigate("devices") },
                { label: "Dashboard", action: () => onNavigate("dashboard") },
                { label: "Settings", action: () => onNavigate("settings") },
                {
                  label: "My account",
                  action: () => onNavigate("account"),
                  hasBorder: true,
                },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50
                    ${item.hasBorder ? "border-t border-gray-300" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Header Component
const Header = ({ isMenuOpen, setIsMenuOpen, onNavigate }) => {
  return (
    <header className="bg-teal-400 shadow-sm px-6 py-4 flex justify-between items-center">
      <div
        className="text-xl font-bold text-white cursor-pointer"
        onClick={() => onNavigate("devices")}
      >
        LOGO
      </div>
      <MainDropdown
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        onNavigate={onNavigate}
      />
    </header>
  );
};

// FilterBar Component
const FilterBar = ({
  filters,
  openDropdown,
  onToggleDropdown,
  onFilterSelect,
}) => (
  <div className="flex space-x-4 ">
    {filters.map((filter) => (
      <FilterDropdown
        key={filter.name}
        filter={filter}
        isOpen={openDropdown === filter.name}
        onToggle={onToggleDropdown}
        onSelect={onFilterSelect}
      />
    ))}
  </div>
);
//Machine Card Component
const MachineCard = ({ machine, onSelect }) => {
  const getBorderColor = (id) => {
    const colors = {
      1: "border-blue-600",
      2: "border-teal-400",
      3: "border-blue-600",
      4: "border-green-500",
      5: "border-blue-600",
      6: "border-red-500",
    };
    return colors[machine.id] || "border-blue-600";
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-6 relative flex flex-col ${getBorderColor(
        machine.id
      )}`}
      style={{
        borderLeftWidth: "6px",
        height: "180px", // Increased fixed height
      }}
    >
      <div className="flex flex-col">
        <span className="text-gray-900 text-lg font-medium">
          {machine.name}
        </span>
        <span className="text-gray-500 text-sm mt-1">{machine.machineId}</span>
      </div>
      <button
        onClick={() => onSelect(machine)}
        className="absolute bottom-6 right-6 bg-teal-400 text-white px-6 py-1.5 rounded-md hover:bg-teal-500 transition-colors text-sm"
      >
        View
      </button>
    </div>
  );
};
// Main Dashboard Component
const DevicesDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});
  const [machines] = useState([
    { id: 1, name: "Machine 1 " },
    { id: 2, name: "Machine 2" },
    { id: 3, name: "Machine 3" },
    { id: 4, name: "Machine 4" },
    { id: 5, name: "Machine 5" },
    { id: 6, name: "Machine 6" },
  ]);

  const filters = [
    {
      name: "Department",
      options: ["Engineering", "Marketing", "Sales", "Design", "Operations"],
    },
    {
      name: "Type",
      options: ["Full-time", "Part-time", "Contract", "Internship"],
    },
    {
      name: "Age",
      options: ["18-25", "26-35", "36-45", "46+"],
    },
    {
      name: "Status",
      options: ["Active", "Inactive", "Pending", "On Leave"],
    },
  ];

  const handleFilterSelect = (filterName, option) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterName]: option,
    }));
    setOpenDropdown(null);
  };

  const handleNavigate = (route) => {
    console.log(`Navigating to: ${route}`);
    // Add your navigation logic here
  };

  if (selectedMachine) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          onNavigate={handleNavigate}
        />
        <main className="container mx-auto px-6 py-8">
          <div className="flex items-center mb-8">
            <button
              onClick={() => setSelectedMachine(null)}
              className="text-teal-600 hover:text-teal-700 mr-4"
            >
              ← Back
            </button>
            <h1 className="text-2xl font-bold text-navy-900 border-b-2 border-navy-900 pb-2 inline-block">
              {selectedMachine.name}
            </h1>
          </div>
          <div className="bg-white rounded-lg p-6 min-h-[400px]">
            {/* Machine details content */}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onNavigate={handleNavigate}
      />
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-4 lg:space-y-0">
          <h1 className="text-xl md:text-2xl font-bold text-navy-900 border-b-2 border-navy-900 pb-1 inline-block">
            All Devices
          </h1>
          <div className="bg-gray-50 w-full lg:w-auto  my-4 lg:my-0 flex justify-center">
            <FilterBar
              filters={filters}
              openDropdown={openDropdown}
              onToggleDropdown={setOpenDropdown}
              onFilterSelect={handleFilterSelect}
            />
          </div>
          <div>
            <button className="bg-teal-400 text-white px-4 md:px-6 py-2 rounded-md hover:bg-teal-500 transition-colors text-sm md:text-base">
              Add Machine
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 p-6">
          {machines.map((machine) => (
            <MachineCard
              key={machine.id}
              machine={{
                ...machine,
                machineId: machine.id === 2 ? "ABF639" : "AGF689",
              }}
              onSelect={(machine) => {
                setSelectedMachine(machine);
                setIsMenuOpen(false);
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DevicesDashboard;
