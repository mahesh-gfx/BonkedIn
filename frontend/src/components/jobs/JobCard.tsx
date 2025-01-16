import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import type { Job } from '@/types';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.company}</p>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        <Badge variant="secondary">
          {job.salary.currency}{job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()}
        </Badge>
      </div>

      <div className="mt-4">
        <p className="text-gray-700">{job.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.requirements.map((req, index) => (
          <Badge key={index} variant="outline">
            {req}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            Posted {formatDate(job.postedAt)}
          </span>
          <span className="text-sm text-gray-500">
            {job.applicants} applicants
          </span>
        </div>
        <Button>Apply Now</Button>
      </div>
    </Card>
  );
}