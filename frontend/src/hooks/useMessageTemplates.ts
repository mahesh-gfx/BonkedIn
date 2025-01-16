import { useState } from 'react';

interface Template {
  id: string;
  name: string;
  content: string;
}

export function useMessageTemplates() {
  const [templates, setTemplates] = useState<Template[]>([]);

  const createTemplate = () => {
    const newTemplate = {
      id: crypto.randomUUID(),
      name: 'New Template',
      content: ''
    };
    setTemplates([...templates, newTemplate]);
  };

  const updateTemplate = (id: string, updates: Partial<Template>) => {
    setTemplates(templates.map(template => 
      template.id === id ? { ...template, ...updates } : template
    ));
  };

  const deleteTemplate = (id: string) => {
    setTemplates(templates.filter(template => template.id !== id));
  };

  return {
    templates,
    createTemplate,
    updateTemplate,
    deleteTemplate
  };
}