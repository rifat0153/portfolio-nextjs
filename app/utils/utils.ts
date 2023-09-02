import { WorkExperience, workExperiences } from '../experiences/experinces';
import { softwareProjects } from '../projects/projects';
import { Skill, SkillIDType, softwareSkills } from '../skills/skills';

const getSkillsByIds = (ids: string[]): Skill[] => {
  return softwareSkills.filter((skill) => ids.includes(skill.id));
};

export const getWorkExperiencesBySkillId = (skillId: SkillIDType) => {
  const experiences = workExperiences.filter((experience) =>
    getSkillsByExperienceId(experience.id).some((skill) => skill.id === skillId)
  );
  return experiences;
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

  // get all work experiences associated with the project
  const experiences = getWorkExperienceByProjectIds([projectId]);

  // get all skills associated with the project
  const skills = experiences.flatMap((experience) => {
    const experienceSkills = getSkillsByIds(experience.associatedSkills);
    return experienceSkills;
  });

  // merge with project skills
  skills.push(...getSkillsByIds(project.associatedSkills));

  // remove duplicates
  const skillsSet = new Set(skills);

  return Array.from(skillsSet);
};

const getWorkExperienceByProjectIds = (projectIds: string[]): WorkExperience[] => {
  const experiences = workExperiences.filter((experience) =>
    experience.associatedProjects.some((projectId) => projectIds.includes(projectId))
  );
  return experiences;
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
