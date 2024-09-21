import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Application, Resume } from '@/types/application';

interface ApplicationStore {
  applications: Application[];
  resumes: Resume[];
  addApplication: (application: Application) => void;
  updateApplication: (id: string, updates: Partial<Application>) => void;
  addResume: (resume: Resume) => void;
  updateResume: (id: string, updates: Partial<Resume>) => void;
  deleteResume: (id: string) => void;
  setDefaultResume: (id: string) => void;
}

export const useApplicationStore = create<ApplicationStore>()(
  persist(
    (set) => ({
      applications: [],
      resumes: [],

      addApplication: (application) =>
        set((state) => ({
          applications: [...state.applications, application]
        })),

      updateApplication: (id, updates) =>
        set((state) => ({
          applications: state.applications.map((app) =>
            app.id === id ? { ...app, ...updates, lastUpdated: new Date() } : app
          )
        })),

      addResume: (resume) =>
        set((state) => ({
          resumes: [...state.resumes, resume]
        })),

      updateResume: (id, updates) =>
        set((state) => ({
          resumes: state.resumes.map((res) =>
            res.id === id ? { ...res, ...updates, updatedAt: new Date() } : res
          )
        })),

      deleteResume: (id) =>
        set((state) => ({
          resumes: state.resumes.filter((res) => res.id !== id)
        })),

      setDefaultResume: (id) =>
        set((state) => ({
          resumes: state.resumes.map((res) => ({
            ...res,
            isDefault: res.id === id
          }))
        }))
    }),
    {
      name: 'application-store'
    }
  )
);