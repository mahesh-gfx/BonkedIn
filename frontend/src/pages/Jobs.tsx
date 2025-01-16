import React from 'react';
import { JobSearch } from '@/components/jobs/JobSearch';

export function JobsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <JobSearch />
    </div>
  );
}