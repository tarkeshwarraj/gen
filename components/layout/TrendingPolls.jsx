// components/TrendingPolls.jsx
import React from "react";
import Card from "@/components/layout/Card";
import {polls} from "@/app/assets/assets";

const TrendingPolls = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
        Trending Polls
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {polls.map((poll, index) => (
          <Card key={index} {...poll} />
        ))}
      </div>
    </section>
  );
};

export default TrendingPolls;
