import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Edit2, Trash } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onUpdate: (id: string, data: Partial<Project>) => void;
  onDelete: (id: string) => void;
}

export function ProjectCard({ project, onUpdate, onDelete }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-2">
            {project.liveUrl && (
              <Button size="sm" variant="outline" className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" className="flex items-center">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            )}
          </div>

          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onUpdate(project.id, {})}
            >
              <Edit2 className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onDelete(project.id)}
            >
              <Trash className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}