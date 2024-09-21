import React from 'react';
import { useApplicationStore } from '@/store/applicationStore';
import { ApplicationList } from './ApplicationList';
import { ApplicationStats } from './ApplicationStats';
import { ResumeManager } from './ResumeManager';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ApplicationDashboard() {
  const { applications } = useApplicationStore();

  return (
    <div className="space-y-6">
      <ApplicationStats applications={applications} />
      
      <Tabs defaultValue="applications" className="w-full">
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="resumes">Resumes</TabsTrigger>
        </TabsList>

        <TabsContent value="applications">
          <ApplicationList applications={applications} />
        </TabsContent>

        <TabsContent value="resumes">
          <ResumeManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}