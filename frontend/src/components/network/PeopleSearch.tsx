import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSearch } from '@/hooks/useSearch';
import { PeopleList } from './PeopleList';
import { SearchFilters } from './SearchFilters';

export function PeopleSearch() {
  const {
    query,
    setQuery,
    filters,
    setFilters,
    results,
    isLoading
  } = useSearch('people');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex space-x-4 mb-6">
        <Input
          type="text"
          placeholder="Search people by name, title, or company"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">Search</Button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <SearchFilters
            filters={filters}
            onChange={setFilters}
          />
        </div>

        <div className="col-span-9">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <PeopleList people={results} />
          )}
        </div>
      </div>
    </div>
  );
}