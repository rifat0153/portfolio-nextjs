import { workExperiences } from '../experiences/experinces';
import { softwareProjects } from '../projects/projects';
import { Skill, softwareSkills } from '../skills/skills';

const getSkillsByIds = (ids: string[]): Skill[] => {
  return softwareSkills.filter((skill) => ids.includes(skill.id));
};

export const getWorkExperienceByIds = (ids: string[]) => {
  return workExperiences.filter((experience) => ids.includes(experience.id));
};

export const getSoftwareProjectsByIds = (ids: string[]) => {
  return softwareProjects.filter((project) => ids.includes(project.id));
};

export const getSkillsByProjectId = (projectId: string): Skill[] => {
  const project = softwareProjects.find((project) => project.id === projectId);

  if (!project) {
    return [];
  }

  const skills = getSkillsByIds(project.associatedSkills);
  return skills;
};

export const getSkillsByExperienceId = (experienceId: string): Skill[] => {
  const experince = workExperiences.find((experience) => experience.id === experienceId);

  if (!experince) {
    return [];
  }

  const skills = experince.associatedProjects.flatMap((projectId) => {
    const projectSkills = getSkillsByProjectId(projectId);
    return projectSkills;
  });

  skills.push(...getSkillsByIds(experince.associatedSkills));

  const skillsSet = new Set(skills);

  return Array.from(skillsSet);
};
