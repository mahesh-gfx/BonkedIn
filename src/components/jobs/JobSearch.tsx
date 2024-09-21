import React from 'react';
import { useJobSearch } from '@/hooks/useJobSearch';
import { JobFilters } from './JobFilters';
import { JobList } from './JobList';
import { SaveSearchButton } from './SaveSearchButton';

export function JobSearch() {
  const {
    jobs,
    filters,
    setFilters,
    isLoading,
    error,
    saveSearch,
    savedSearches
  } = useJobSearch();

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3">
        <JobFilters
          filters={filters}
          onChange={setFilters}
        />
        <div className="mt-6">
          <SaveSearchButton onSave={saveSearch} />
          {savedSearches.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">Saved Searches</h3>
              <ul className="mt-2 space-y-2">
                {savedSearches.map((search) => (
                  <li
                    key={search.id}
                    className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    {search.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="col-span-9">
        {isLoading ? (
          <div>Loading jobs...</div>
        ) : error ? (
          <div>Error loading jobs</div>
        ) : (
          <JobList jobs={jobs} />
        )}
      </div>
    </div>
  );
}