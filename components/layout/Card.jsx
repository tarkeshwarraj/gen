// components/PollCard.jsx
import React from "react";

const Card = ({ image, category, color, title, description, percentage }) => {
  return (
    <div className="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative">
        <div
          className="h-48 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span
            className={`inline-block px-2 py-1 text-xs font-semibold uppercase text-white rounded-md`}
            style={{ backgroundColor: color }}
          >
            {category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold leading-tight text-slate-800 dark:text-white group-hover:text-[var(--primary-color)]">
          {title}
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
          {description}
        </p>

        {percentage ? (
          <>
            <div className="mt-4 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className="h-2 rounded-full"
                style={{ backgroundColor: color, width: `${percentage}%` }}
              ></div>
            </div>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-400">
              {percentage}% Voted
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
