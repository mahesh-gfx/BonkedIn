import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

interface JobFiltersProps {
  filters: {
    keywords: string;
    location: string;
    salary: [number, number];
    remote: boolean;
    experience: string[];
    jobType: string[];
  };
  onChange: (filters: any) => void;
}

export function JobFilters({ filters, onChange }: JobFiltersProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-gray-700">Keywords</label>
        <Input
          type="text"
          value={filters.keywords}
          onChange={(e) => onChange({ ...filters, keywords: e.target.value })}
          className="mt-1"
          placeholder="Job title, skills, or company"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Location</label>
        <Input
          type="text"
          value={filters.location}
          onChange={(e) => onChange({ ...filters, location: e.target.value })}
          className="mt-1"
          placeholder="City, state, or remote"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Salary Range</label>
        <Slider
          value={filters.salary}
          onValueChange={(value) => onChange({ ...filters, salary: value })}
          min={0}
          max={500000}
          step={1000}
          className="mt-2"
        />
        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>${filters.salary[0].toLocaleString()}</span>
          <span>${filters.salary[1].toLocaleString()}</span>
        </div>
      </div>

      <div>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={filters.remote}
            onCheckedChange={(checked) => 
              onChange({ ...filters, remote: checked })
            }
          />
          <span className="text-sm font-medium text-gray-700">Remote Only</span>
        </label>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Experience Level</label>
        {['Entry Level', 'Mid Level', 'Senior', 'Lead', 'Executive'].map((level) => (
          <label key={level} className="flex items-center mt-2 space-x-2">
            <Checkbox
              checked={filters.experience.includes(level)}
              onCheckedChange={(checked) => {
                const newExperience = checked
                  ? [...filters.experience, level]
                  : filters.experience.filter((e) => e !== level);
                onChange({ ...filters, experience: newExperience });
              }}
            />
            <span className="text-sm text-gray-600">{level}</span>
          </label>
        ))}
      </div>
    </div>
  );
}