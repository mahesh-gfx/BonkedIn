import React from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

interface SearchFiltersProps {
  filters: {
    industries: string[];
    locations: string[];
    connections: string[];
  };
  onChange: (filters: any) => void;
}

export function SearchFilters({ filters, onChange }: SearchFiltersProps) {
  return (
    <Card className="p-4">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Industry</h3>
          {['Technology', 'Finance', 'Healthcare', 'Education'].map((industry) => (
            <label key={industry} className="flex items-center mt-2">
              <Checkbox
                checked={filters.industries.includes(industry)}
                onCheckedChange={(checked) => {
                  const newIndustries = checked
                    ? [...filters.industries, industry]
                    : filters.industries.filter((i) => i !== industry);
                  onChange({ ...filters, industries: newIndustries });
                }}
              />
              <span className="ml-2 text-sm text-gray-600">{industry}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Location</h3>
          {['Remote', 'United States', 'Europe', 'Asia'].map((location) => (
            <label key={location} className="flex items-center mt-2">
              <Checkbox
                checked={filters.locations.includes(location)}
                onCheckedChange={(checked) => {
                  const newLocations = checked
                    ? [...filters.locations, location]
                    : filters.locations.filter((l) => l !== location);
                  onChange({ ...filters, locations: newLocations });
                }}
              />
              <span className="ml-2 text-sm text-gray-600">{location}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Connection Type</h3>
          {['1st', '2nd', '3rd+'].map((connection) => (
            <label key={connection} className="flex items-center mt-2">
              <Checkbox
                checked={filters.connections.includes(connection)}
                onCheckedChange={(checked) => {
                  const newConnections = checked
                    ? [...filters.connections, connection]
                    : filters.connections.filter((c) => c !== connection);
                  onChange({ ...filters, connections: newConnections });
                }}
              />
              <span className="ml-2 text-sm text-gray-600">{connection}</span>
            </label>
          ))}
        </div>
      </div>
    </Card>
  );
}