import React from 'react';
import { useMessageTemplates } from '@/hooks/useMessageTemplates';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function MessageTemplates() {
  const {
    templates,
    createTemplate,
    updateTemplate,
    deleteTemplate
  } = useMessageTemplates();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Message Templates</h2>
        <Button onClick={() => createTemplate()}>Create Template</Button>
      </div>

      <div className="grid gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <Input
              value={template.name}
              onChange={(e) => updateTemplate(template.id, { name: e.target.value })}
              className="font-medium mb-2"
              placeholder="Template Name"
            />
            
            <Textarea
              value={template.content}
              onChange={(e) => updateTemplate(template.id, { content: e.target.value })}
              className="mt-2"
              placeholder="Template Content"
              rows={4}
            />

            <div className="mt-4 flex justify-end space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => deleteTemplate(template.id)}
              >
                Delete
              </Button>
              <Button
                size="sm"
                onClick={() => {/* Copy to clipboard */}}
              >
                Use Template
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}