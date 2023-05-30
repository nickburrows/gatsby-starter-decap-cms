import React from "react";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";

const DarkToggle = ({ toggle, isDark }) => {
  return (
    <>
      <button
        className="p-2 text-zeus-300 font-bold dark:bg-yellow-300/10 border rounded-md dark:hover:border-yellow-300 dark:text-white dark:border-gray-100 hover:border-zeus-300 hover:text-zeus-400 hover:bg-zeus-300/20 dark-mode-toggle"
        onClick={toggle}>
        {isDark ? <MdOutlineNightlight /> : <MdOutlineLightMode />}
      </button>
    </>
  );
};

export default DarkToggle;
