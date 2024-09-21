import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import type { Application } from '@/types/application';

interface ApplicationCardProps {
  application: Application;
}

export function ApplicationCard({ application }: ApplicationCardProps) {
  const statusColors = {
    draft: 'bg-gray-200 text-gray-800',
    submitted: 'bg-blue-100 text-blue-800',
    reviewed: 'bg-yellow-100 text-yellow-800',
    interviewing: 'bg-purple-100 text-purple-800',
    offered: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800'
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{application.jobId}</h3>
          <p className="text-sm text-gray-500">
            Applied {formatDate(application.submittedAt)}
          </p>
        </div>
        <Badge className={statusColors[application.status]}>
          {application.status}
        </Badge>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Resume: {application.resume.title}
        </p>
        {application.coverLetter && (
          <p className="text-sm text-gray-600 mt-1">Cover Letter included</p>
        )}
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <Button variant="outline" size="sm">
          View Details
        </Button>
        <Button variant="outline" size="sm">
          Track Status
        </Button>
      </div>
    </Card>
  );
}