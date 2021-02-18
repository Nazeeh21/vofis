import React, { useState } from 'react';
import { LeftArrow, RightArrow } from '../../components/ArrowButtons';
import ExporeProjects from '../../components/ExploreProjects';
import RecommendedItems from '../../components/RecommendedItems';
import { loremIpsum } from '../../constants';
import Details from './details';

const recommendedItems = [
  {
    category: 'DESIGN',
    title: 'Apple in.',
    description: loremIpsum,
    type: '2 days ago',
  },
  {
    category: 'ILLUSTRATION',
    title: 'Elephant House',
    description: loremIpsum,
    type: '2 days ago',
  },
  {
    category: 'APP DEVELOPMENT',
    title: 'Kangaroo Aus',
    description: loremIpsum,
    type: '2 days ago',
  },
];

const exploreProjectItems = [
  {
    organization: 'ELEPHANT STUDIO',
    post: 'Team assistant',
    time: 'FULL TIME',
    description: loremIpsum,
    datePosted: '2 days ago',
    budget: 1200,
  },
  {
    organization: 'ELEPHANT STUDIO',
    post: 'Team assistant',
    time: 'FULL TIME',
    description: loremIpsum,
    datePosted: '2 days ago',
    budget: 1200,
  },
  {
    organization: 'ELEPHANT STUDIO',
    post: 'Team assistant',
    time: 'FULL TIME',
    description: loremIpsum,
    datePosted: '2 days ago',
    budget: 1200,
  },
  {
    organization: 'ELEPHANT STUDIO',
    post: 'Team assistant',
    time: 'FULL TIME',
    description: loremIpsum,
    datePosted: '2 days ago',
    budget: 1200,
  },
  {
    organization: 'ELEPHANT STUDIO',
    post: 'Team assistant',
    time: 'FULL TIME',
    description: loremIpsum,
    datePosted: '2 days ago',
    budget: 1200,
  },
];

const Explore: React.FC = () => {
  const [showDetailsPage, setShowDetailsPage] = useState(false);

  if (showDetailsPage) {
    return <Details backButtonClickHandler={() => setShowDetailsPage(false)} />;
  }
  return (
    <>
      <div>
        <div className="">
          <div className="font-display text-2xl font-semibold">
            Recommended for you
          </div>
          {/* <div className="overflow-x-auto mt-4 flex">
        {recommendedItems.map((item, index) => (
          <div className="mr-16" key={index}>
            <RecommendedItems
              category={item.category}
              title={item.title}
              description={item.description}
              type={item.type}
            />
          </div>
        ))}
      </div> */}
          <div className="grid grid-flow-col overflow-x-auto w-full mt-8">
            {recommendedItems.map((item, index) => (
              <div key={index} onClick={() => setShowDetailsPage(true)}>
                <RecommendedItems
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  type={item.type}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="font-display text-2xl font-semibold mt-16 flex justify-between items-center w-full">
          New Projects
          <div className="flex justify-start items-center">
            <LeftArrow
              clickHandler={() => {
                return;
              }}
            />
            <div className="text-xl font-semibold text-gray-600 font-display ">
              01 / 02
            </div>
            <RightArrow
              clickHandler={() => {
                return;
              }}
            />
          </div>
        </div>
        <div>
          {exploreProjectItems.map((item, index) => (
            <div key={index} onClick={() => setShowDetailsPage(true)}>
              <ExporeProjects
                organization={item.organization}
                post={item.post}
                time={item.time}
                description={item.description}
                datePosted={item.datePosted}
                budget={item.budget}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
