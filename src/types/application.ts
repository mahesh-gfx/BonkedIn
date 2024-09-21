export interface Resume {
  id: string;
  userId: string;
  title: string;
  file: {
    url: string;
    name: string;
    type: string;
    size: number;
  };
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  resume: Resume;
  coverLetter?: string;
  status: 'draft' | 'submitted' | 'reviewed' | 'interviewing' | 'offered' | 'rejected';
  answers: Record<string, string>;
  submittedAt: Date;
  lastUpdated: Date;
}

export interface ApplicationStatus {
  id: string;
  applicationId: string;
  status: Application['status'];
  note?: string;
  createdAt: Date;
}