// components/ActivePolls.jsx
"use client";
import React, { useState } from "react";
import Card from "./Card";
import PollTabs from "./PollTabs";
import { pollsData } from "@/app/assets/assets";

const ActivePolls = () => {
  const categoryTabs = Object.keys(pollsData);  //आपको object की सारी keys देता है,ये array बन जाता है, जिसे आप tabs में इस्तेमाल कर सकते हैं।
  const tabs = ["All", ...categoryTabs];
  const [activeTab, setActiveTab] = useState("All");

  // Determine which polls to show
  const displayedPolls =
    activeTab === "All"
        ? categoryTabs.flatMap((cat) => pollsData[cat])
        : pollsData[activeTab];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
        Active Polls
      </h2>

      {/* Tabs */}
      <PollTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
        {displayedPolls.map((poll, idx) => (
          <Card key={idx} title={poll.title} image={poll.image} description={poll.description} />
        ))}
      </div>
    </section>
  );
};

export default ActivePolls;
