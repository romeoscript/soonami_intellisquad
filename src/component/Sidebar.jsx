import React from "react";
import { BsMicrosoftTeams } from "react-icons/bs";
import { SiCodereview } from "react-icons/si";
import { GiPriceTag } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";

const Sidebar = ({nav}) => {
  return (
    <>
      <div className="h-[100vh] fixed w-[250px]  p-[1rem] border-[1px] border-[gray] md:block hidden">
        <li className="list-none flex items-center gap-4 hover:bg-[grey] hover:text-white p-[0.5rem] rounded-md cursor-pointer my-[0.5rem]">
          <BsMicrosoftTeams /> Build Team
        </li>

        <li className="list-none flex items-center gap-4 hover:bg-[grey] hover:text-white p-[0.5rem] rounded-md cursor-pointer my-[0.5rem]">
          <SiCodereview /> Review CV
        </li>
        <li className="list-none flex items-center gap-4 hover:bg-[grey] hover:text-white p-[0.5rem] rounded-md cursor-pointer my-[0.5rem]">
          <GiPriceTag /> Pricing
        </li>
        <li className="list-none flex items-center gap-4 hover:bg-[grey] hover:text-white p-[0.5rem] rounded-md cursor-pointer my-[0.5rem]">
          <CiSettings /> Settings
        </li>
      </div>

      {nav && (
        <div className="h-[100vh] fixed w-[250px]  p-[1rem] border-[1px] border-[gray] z-20 bg-white md:hidden block">
          <li className="list-none flex items-center gap-4 hover:bg-[grey] hover:text-white p-[0.5rem] rounded-md cursor-pointer my-[0.5rem]">
            <BsMicrosoftTeams /> Build Team
          </li>

          <li className="list-none flex items-center gap-4 hover:bg-[grey] hover:text-white p-[0.5rem] rounded-md cursor-pointer my-[0.5rem]">
            <SiCodereview /> Review CV
          </li>
          <li className="list-none flex items-center gap-4 hover:bg-[grey] hover:text-white p-[0.5rem] rounded-md cursor-pointer my-[0.5rem]">
            <GiPriceTag /> Pricing
          </li>
          <li className="list-none flex items-center gap-4 hover:bg-[grey] hover:text-white p-[0.5rem] rounded-md cursor-pointer my-[0.5rem]">
            <CiSettings /> Settings
          </li>
        </div>
      )}
    </>
  );
};

export default Sidebar;
