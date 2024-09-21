import React from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';
import { ProjectCard } from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function Portfolio() {
  const {
    projects,
    isLoading,
    addProject,
    updateProject,
    deleteProject
  } = usePortfolio();

  if (isLoading) return <div>Loading portfolio...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Portfolio</h2>
        <Button onClick={() => addProject()} className="flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onUpdate={updateProject}
            onDelete={deleteProject}
          />
        ))}
      </div>
    </div>
  );
}