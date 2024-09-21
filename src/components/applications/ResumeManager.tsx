import React from 'react';
import { useApplicationStore } from '@/store/applicationStore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { Upload, Star, Trash2 } from 'lucide-react';

export function ResumeManager() {
  const { resumes, setDefaultResume, deleteResume } = useApplicationStore();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">My Resumes</h3>
        <Button className="flex items-center">
          <Upload className="w-4 h-4 mr-2" />
          Upload Resume
        </Button>
      </div>

      <div className="grid gap-4">
        {resumes.map((resume) => (
          <Card key={resume.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="font-medium">{resume.title}</h4>
                  <p className="text-sm text-gray-500">
                    Updated {formatDate(resume.updatedAt)}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDefaultResume(resume.id)}
                  className={resume.isDefault ? 'text-yellow-500' : ''}
                >
                  <Star className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteResume(resume.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}