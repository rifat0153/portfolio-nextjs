import React from 'react';
import { softwareSkills } from '../skills';

function SkillDetail({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  console.log(params.slug);

  const skills = softwareSkills;

  const skill = skills.find((skill) => skill.name === params.slug);

  if (!skill) {
    return <div>Not found</div>;
  }

  return (
    <>
      <div>{params.slug}</div>
      <div>{skill?.description}</div>
    </>
  );
}

export default SkillDetail;
