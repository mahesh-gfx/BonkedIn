import React from 'react';
import { Card } from '@/components/ui/card';

export function JobRecommendations() {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Recommended Jobs</h2>
      <div className="space-y-4">
        <p className="text-gray-500">Loading recommendations...</p>
      </div>
    </Card>
  );
}