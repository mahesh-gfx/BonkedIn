import React from 'react';
import { Feed } from '@/components/feed/Feed';

export function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Feed />
        </div>
      </div>
    </div>
  );
}