import React from 'react';
import { LeftArrow } from '../../components/ArrowButtons';
import ExporeProjects from '../../components/ExploreProjects';
import DetailsComponent from '../../components/ExploreProjects/DetailsComponent';
import { RoundButton } from '../../components/RoundButton';
import { loremIpsum } from '../../constants';

type DetailsProps = {
  backButtonClickHandler: () => null | void;
};
const ProjectDetails = {
  organization: 'ELEPHANT STUDIO',
  post: 'Team assistant',
  time: 'FULL TIME',
  description: loremIpsum,
  datePosted: '2 days ago',
  budget: 1200,
};

const Details: React.FC<DetailsProps> = ({ backButtonClickHandler }) => {
  return (
    <div className="w-full">
      <div className="h-8">
        <LeftArrow clickHandler={backButtonClickHandler} />
      </div>
      <ExporeProjects
        organization={ProjectDetails.organization}
        post={ProjectDetails.post}
        time={ProjectDetails.time}
        description={ProjectDetails.description}
        datePosted={ProjectDetails.datePosted}
        budget={ProjectDetails.budget}
      />
      <div className="flex justify-between mt-4 items-start">
        <div className="w-8/12">
          <DetailsComponent
            heading="About Elephant Studio"
            description={loremIpsum}
          />
        </div>
        <div className="flex gap-2 justify-around w-4/12 mt-4">
          <div className="w-28">
            <RoundButton
              label="View Profile"
              styles="font-inter font-medium rounded-full h-10 text-xs bg-gray-300"
            />
          </div>
          <div className="w-28">
            <RoundButton
              label="Website"
              styles="font-inter font-medium rounded-full h-10 text-xs bg-gray-300"
            />
          </div>
        </div>
      </div>
      <div>
        <DetailsComponent
          heading="Experience Required"
          description={loremIpsum}
        />
      </div>
      <div>
        <DetailsComponent heading="Time Frame" description={loremIpsum} />
      </div>
    </div>
  );
};

export default Details;
