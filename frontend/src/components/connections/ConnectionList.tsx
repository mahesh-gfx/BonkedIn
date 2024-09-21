import React from 'react';
import { useConnections } from '@/hooks/useConnections';
import { ConnectionCard } from './ConnectionCard';
import { ConnectionFilters } from './ConnectionFilters';
import { Button } from '@/components/ui/button';

export function ConnectionList() {
  const {
    connections,
    filters,
    setFilters,
    isLoading,
    labels,
    updateLabel
  } = useConnections();

  if (isLoading) return <div>Loading connections...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">My Connections</h2>
        <Button variant="outline">Manage Labels</Button>
      </div>

      <ConnectionFilters filters={filters} onChange={setFilters} labels={labels} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {connections.map((connection) => (
          <ConnectionCard
            key={connection.id}
            connection={connection}
            onUpdateLabel={updateLabel}
            labels={labels}
          />
        ))}
      </div>
    </div>
  );
}