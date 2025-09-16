import React, { useEffect, useRef } from "react";

const PollTabs = ({ tabs, activeTab, onTabChange }) => {
  const tabRefs = useRef([]);

  // Auto scroll active tab into view
  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    if (tabRefs.current[activeIndex]) {
      tabRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center", // horizontally center active tab
        block: "nearest",
      });
    }
  }, [activeTab, tabs]);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 overflow-x-auto scrollbar-hide">
      <nav
        aria-label="Tabs"
        className="flex space-x-4 sm:space-x-8 px-4 transition-transform duration-300 ease-in-out"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[idx] = el)} // assign ref
            onClick={() => onTabChange(tab)}
            className={`whitespace-nowrap py-4 px-3 sm:px-1 border-b-2 font-medium text-sm transition-colors duration-300 ease-in-out
              ${
                activeTab === tab
                  ? "border-[var(--primary-color)] text-[var(--primary-color)]"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300"
              }`}
            style={{ scrollSnapAlign: "start" }}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default PollTabs;
