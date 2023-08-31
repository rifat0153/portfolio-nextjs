import { skillIDs } from '../skills/skills';

export const projectIDs = {
  ANOMALY_DETECTION: 'anomaly-detection',
  ANOTHER_PROJECT: 'another-project', // Mocked this for the sake of example
  // ... other projects
} as const;

export type ProjectIDType = (typeof projectIDs)[keyof typeof projectIDs];

export interface Project {
  id: ProjectIDType;
  name: string;
  description: string;
  url: string;
  associatedSkills: (typeof skillIDs)[keyof typeof skillIDs][];
}

export const softwareProjects: Project[] = [
  {
    id: projectIDs.ANOMALY_DETECTION,
    name: 'Anomaly Detection System',
    description: 'A system I developed for Network Rail to detect anomalies ...', // Mocked
    url: 'https://networkrail.co.uk/anomaly-detection/', // Mocked
    associatedSkills: ['csharp'],
  },
  // ... other projects
];
