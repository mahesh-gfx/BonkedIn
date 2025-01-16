import * as React from "react";
import { cn } from "@/lib/utils";

export interface SliderProps {
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  min: number;
  max: number;
  step?: number;
  className?: string;
}

export function Slider({ 
  value, 
  onValueChange, 
  min, 
  max, 
  step = 1,
  className 
}: SliderProps) {
  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [...value] as [number, number];
    newValue[index] = Number(e.target.value);
    
    if (index === 0 && newValue[0] > newValue[1]) {
      newValue[0] = newValue[1];
    }
    if (index === 1 && newValue[1] < newValue[0]) {
      newValue[1] = newValue[0];
    }
    
    onValueChange(newValue);
  };

  return (
    <div 
      className={cn("relative pt-1", className)}
      role="group"
      aria-label="Price range"
    >
      <div className="flex space-x-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[0]}
          onChange={handleChange(0)}
          className={cn(
            "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
            "range-thumb:w-4 range-thumb:h-4 range-thumb:bg-blue-600 range-thumb:rounded-full",
            "range-thumb:border-0 range-thumb:shadow-sm"
          )}
          aria-label="Minimum value"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[1]}
          onChange={handleChange(1)}
          className={cn(
            "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
            "range-thumb:w-4 range-thumb:h-4 range-thumb:bg-blue-600 range-thumb:rounded-full",
            "range-thumb:border-0 range-thumb:shadow-sm"
          )}
          aria-label="Maximum value"
        />
      </div>
    </div>
  );
}