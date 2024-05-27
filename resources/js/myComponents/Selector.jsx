import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { usePage } from "@inertiajs/react";

const Selector = ({ title, api , url}) => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);



  useEffect(() => {
    fetch(`${url}/api/${api}`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, [api]);

 
  return (
    <div className="flex flex-col gap-y-3">
      <span>{title}</span>
      <div className="relative font-medium h-8 ">

        <div
          onClick={() => setOpen(!open)}
          className={`bg-white w-full p-2 flex items-center justify-between rounded-full ring-1 ring-gray-300 focus:ring-gray-400 px-3 cursor-pointer ${
            !selected && "text-gray-700"
          }`}
        >
          {selected
            ? selected.length > 25
              ? selected.substring(0, 25) + "..."
              : selected
            : `Select ${title}`}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
        <ul
          className={`bg-white mt-2 overflow-y-auto relative w-full left-0 z-40 transition-max-height duration-300 ${
            open ? "max-h-60" : "max-h-0"
          }`}
          style={{ position: 'absolute' }}
        >
          <div className="flex items-center px-2 sticky top-0 bg-white">
            <AiOutlineSearch size={18} className="text-gray-700" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder={`Enter ${title}`}
              className="placeholder:text-gray-700 p-2 outline-none w-full ring-gray-300 focus:ring-0 ring-0 border-0 text-xs"
            />
          </div>
          {countries?.map((country) => (
            <li
              key={country?.name}
              className={`p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer ${
                country?.name?.toLowerCase() === selected?.toLowerCase() &&
                "bg-sky-600 text-white"
              } ${
                country?.name?.toLowerCase().startsWith(inputValue)
                  ? "block"
                  : "hidden"
              }`}
              onClick={() => {
                if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(country?.name);
                  setOpen(false);
                  setInputValue("");
                }
              }}
            >
              {country?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Selector;
