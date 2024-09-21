import React from 'react';
import { Card } from '@/components/ui/card';
import type { Application } from '@/types/application';

interface ApplicationStatsProps {
  applications: Application[];
}

export function ApplicationStats({ applications }: ApplicationStatsProps) {
  const stats = applications.reduce(
    (acc, app) => ({
      ...acc,
      total: acc.total + 1,
      [app.status]: (acc[app.status] || 0) + 1
    }),
    { total: 0 } as Record<string, number>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="p-4">
        <h4 className="text-sm font-medium text-gray-500">Total Applications</h4>
        <p className="text-2xl font-bold mt-1">{stats.total}</p>
      </Card>

      <Card className="p-4">
        <h4 className="text-sm font-medium text-gray-500">In Progress</h4>
        <p className="text-2xl font-bold mt-1">
          {(stats.submitted || 0) + (stats.reviewed || 0)}
        </p>
      </Card>

      <Card className="p-4">
        <h4 className="text-sm font-medium text-gray-500">Interviewing</h4>
        <p className="text-2xl font-bold mt-1">{stats.interviewing || 0}</p>
      </Card>

      <Card className="p-4">
        <h4 className="text-sm font-medium text-gray-500">Success Rate</h4>
        <p className="text-2xl font-bold mt-1">
          {stats.total
            ? Math.round((stats.offered || 0) / stats.total * 100)
            : 0}%
        </p>
      </Card>
    </div>
  );
}