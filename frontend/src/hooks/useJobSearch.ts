import { useState, useEffect } from 'react';
import { useJobStore } from '@/store/jobStore';
import type { Job } from '@/types';

export function useJobSearch() {
  const [filters, setFilters] = useState({
    keywords: '',
    location: '',
    salary: [0, 500000] as [number, number],
    remote: false,
    experience: [] as string[],
    jobType: [] as string[]
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);

  const { savedSearches, saveSearch } = useJobStore();

  useEffect(() => {
    const searchJobs = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Implement job search logic here
        const results = await fetch('/api/jobs/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(filters)
        }).then(res => res.json());

        setJobs(results);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to search jobs'));
      } finally {
        setIsLoading(false);
      }
    };

    searchJobs();
  }, [filters]);

  return {
    jobs,
    filters,
    setFilters,
    isLoading,
    error,
    saveSearch,
    savedSearches
  };
}