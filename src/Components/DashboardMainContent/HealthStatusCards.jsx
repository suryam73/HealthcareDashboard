import React from 'react'
import { healthStatusCards } from '../../data/healthStatusCards';

import {

  ArrowRight,
} from "lucide-react";
const HealthStatusCards = () => (
  <div className="space-y-4">
    {healthStatusCards.map((card) => {
      const Icon = card.icon;
      return (
        <div key={card.id} className="bg-backGroudColor  rounded-xl px-3 py-2 shadow-sm">
          <div className="flex flex-col items-start space-x-3">
            <div className="p-2 flex gap-3 justify-between items-center rounded-lg ">
              <img src={card.icon} alt={card.title} className="w-10 h-" />
              <div className="font-semibold text-gray-800 mb-1">{card.title}</div>
            </div>
            <div className="flex-1">
            
              <p className="text-xs text-nowrap text-gray-500 mb-3">{card.date}</p>
              <div className="w-[150px] bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${card.progress}%`, 
                    backgroundColor: card.color 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
    
    <div className="pt-4 flex justify-end">
      <button className="flex items-center  text-primaryColor text-sm font-medium">
        <span>Details</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

export default HealthStatusCards
