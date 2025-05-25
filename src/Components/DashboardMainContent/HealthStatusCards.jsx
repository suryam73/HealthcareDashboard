import React from 'react';
import { healthStatusCards } from '../../data/healthStatusCards';
import { ArrowRight } from "lucide-react";

const HealthStatusCards = () => (
  <div className="space-y-4">
    {healthStatusCards.map((card) => (
      <div
        key={card.id}
        className="bg-backGroudColor relative rounded-xl px-3 py-2 shadow-sm"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <img src={card.icon} alt={card.title} className="w-8 h-8 sm:w-10 sm:h-10" />
          <div className="flex flex-col w-full">
            <div className="font-semibold text-gray-800 text-sm sm:text-base">
              {card.title}
            </div>
            <p className="text-[11px] sm:text-xs text-gray-500 whitespace-normal break-words mb-2">
              {card.date}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${card.progress}%`,
                  backgroundColor: card.color,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    ))}

    <div className="pt-4 flex justify-end">
      <button className="flex items-center text-primaryColor text-sm font-medium">
        <span>Details</span>
        <ArrowRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  </div>
);

export default HealthStatusCards;
