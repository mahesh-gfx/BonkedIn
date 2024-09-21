import React from 'react';
import { ApplicationCard } from './ApplicationCard';
import type { Application } from '@/types/application';

interface ApplicationListProps {
  applications: Application[];
}

export function ApplicationList({ applications }: ApplicationListProps) {
  const sortedApplications = [...applications].sort(
    (a, b) => b.lastUpdated.getTime() - a.lastUpdated.getTime()
  );

  return (
    <div className="space-y-4">
      {sortedApplications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
        />
      ))}
    </div>
  );
}