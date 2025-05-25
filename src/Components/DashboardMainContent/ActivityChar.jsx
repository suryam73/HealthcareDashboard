import React from 'react'
import { activityData } from '../../data/activityData';

const ActivityChart = () => (
    <div className="bg-backGroudColor rounded-2xl p-4 shadow-sm">
      <div className='flex justify-between '>
      <h3 className="text-base font-semibold text-primaryColor ">Activity</h3>
      <p className="text-xs  text-gray-400">3 appointment on this week</p>
      </div>

      <div className="flex  items-end gap-2 justify-between  h-60 md:space-x-2">
        {activityData.map((item, index) => (
          <div key={index} className="flex flex-col items-center  md:flex-1">
            
            <div className="flex gap-1 md:gap-3  items-center space-y-1 mb-2">
              <div>
              <div 
                className={`w-1 md:w-2 h-2 rounded-full ${
                  index % 3 === 0 ? 'bg-gray-200' : 'bg-cyan-400'
                }`}
                style={{ height: `${item.value }px` }}
              ></div>
              </div>
              
           <div className='flex flex-col gap-2'>
           <div 
                className={`w-1 md:w-2 h-2 rounded-full ${
                  index % 3 === 0 ? 'bg-primaryColor' : 'bg-cyan-400'
                }`}
                style={{ height: `${item.value}px` }}
              ></div>
              <div 
                className={`w-1 md:w-2 h-9 rounded-full ${
                  index % 3 === 0 ? 'bg-cyan-400' : 'bg-primaryColor'
                }`}
                style={{ height: `${item.value}px` }}
              ></div>
           </div>

           <div>
              <div 
                className={`w-1 md:w-2 h-2 rounded-full ${
                  index % 3 === 0 ? 'bg-gray-200' : 'bg-primaryColor'
                }`}
                style={{ height: `${item.value   }px` }}
              ></div>
              </div>
            </div>
            <span className="text-xs text-gray-500 font-medium">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
  
export default ActivityChart
