import React from 'react';
import { useRecruiterStats } from '@/hooks/useRecruiterStats';
import { Card } from '@/components/ui/card';
import { 
  LineChart,
  BarChart,
  PieChart 
} from '@/components/ui/charts';

export function RecruiterStats() {
  const {
    jobStats,
    applicationStats,
    demographicStats,
    timeToHire,
    isLoading
  } = useRecruiterStats();

  if (isLoading) return <div>Loading stats...</div>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-medium">Active Jobs</h3>
            <p className="text-3xl font-bold mt-2">{jobStats.activeJobs}</p>
            <p className="text-sm text-gray-500 mt-1">
              {jobStats.activeJobsChange}% from last month
            </p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-medium">Total Applications</h3>
            <p className="text-3xl font-bold mt-2">
              {applicationStats.totalApplications}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Across {applicationStats.totalJobs} jobs
            </p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-medium">Avg. Time to Hire</h3>
            <p className="text-3xl font-bold mt-2">{timeToHire.average} days</p>
            <p className="text-sm text-gray-500 mt-1">
              {timeToHire.trend}% faster than last quarter
            </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Application Trends</h3>
            <LineChart data={applicationStats.trends} />
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Candidate Demographics</h3>
            <PieChart data={demographicStats.distribution} />
          </div>
        </Card>
      </div>

      <Card>
        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">Hiring Pipeline</h3>
          <BarChart data={applicationStats.pipeline} />
        </div>
      </Card>
    </div>
  );
}