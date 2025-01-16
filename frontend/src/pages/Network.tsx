import React from 'react';
import { PeopleSearch } from '@/components/network/PeopleSearch';
import { NetworkSuggestions } from '@/components/network/NetworkSuggestions';

export function NetworkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <PeopleSearch />
        </div>
        <div className="lg:col-span-4">
          <NetworkSuggestions />
        </div>
      </div>
    </div>
  );
}