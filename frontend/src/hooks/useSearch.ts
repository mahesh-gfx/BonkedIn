import { useState, useEffect } from 'react';
import type { User } from '@/types';

export function useSearch(type: 'people' | 'jobs') {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    industries: [],
    locations: [],
    connections: []
  });
  const [results, setResults] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const search = async () => {
      setIsLoading(true);
      try {
        // Simulated search results
        setResults([
          {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
            title: 'Software Engineer',
            company: 'Tech Corp',
            location: 'San Francisco, CA',
            bio: 'Full-stack developer with 5+ years of experience',
            skills: ['React', 'Node.js', 'TypeScript'],
            experience: [],
            education: [],
            connections: []
          }
        ]);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    search();
  }, [query, filters]);

  return {
    query,
    setQuery,
    filters,
    setFilters,
    results,
    isLoading
  };
}