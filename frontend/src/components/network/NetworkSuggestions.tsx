import React from 'react';
import { Card } from '@/components/ui/card';

export function NetworkSuggestions() {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">People You May Know</h2>
      <div className="space-y-4">
        <p className="text-gray-500">Loading suggestions...</p>
      </div>
    </Card>
  );
}