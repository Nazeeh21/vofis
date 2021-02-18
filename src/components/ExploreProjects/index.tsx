import React from 'react';
import { ApplyButton } from '../RoundButton';

type ExploreProjectsProps = {
  organization: string;
  post: string;
  time: string;
  description: string;
  datePosted: string;
  budget: number;
};

const SkillsComponent: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="w-auto text-white px-4 py-1 bg-gray3 rounded-full font-inter text-sm text-center">
      {label}
    </div>
  );
};

const ExporeProjects: React.FC<ExploreProjectsProps> = ({
  organization,
  post,
  time,
  description,
  datePosted,
  budget,
}) => {
  return (
    <div className="mt-6">
      <div className="font-inter text-gray3 text-sm">{organization}</div>
      <div className="flex justify-between items-center">
        <div className="flex items-baseline mt-1">
          <div className="font-display text-2xl font-semibold mr-4">{post}</div>
          <div className="font-inter text-sm text-gray3">
            {time.toUpperCase()}
          </div>
        </div>
        <div>
          <img src="/save.png" alt="save" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div>
          <div className="w-6/12 font-body ">{description}</div>
          <div className="font-display text-xs">{datePosted}</div>
        </div>
        <div className="text-blue text-right">
          <div className="font-display flex text-3xl font-semibold">
            $ <span className="ml-1">{budget}</span>
          </div>
          <div className="font-inter ">BUDGET</div>
        </div>
      </div>
      <div className="flex items-baseline justify-between mt-4">
        <div className="grid grid-cols-5 items-center">
          <div className="mr-8 mb-4">
            <SkillsComponent label="3d design" />
          </div>
          <div className="mr-8 mb-4">
            <SkillsComponent label="3d Animation" />
          </div>
          <div className="mr-8 mb-4">
            <SkillsComponent label="3d Modeling" />
          </div>
          <div className="mr-8 mb-4">
            <SkillsComponent label="3d Rendering" />
          </div>
          <div className="mr-8 mb-4">
            <SkillsComponent label="3ds Max" />
          </div>
        </div>
        <div>
          <ApplyButton />
        </div>
      </div>
      <div className="w-full bg-white h-1 mt-6" />
    </div>
  );
};

export default ExporeProjects;
