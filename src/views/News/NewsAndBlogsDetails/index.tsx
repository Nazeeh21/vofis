import React from 'react';
import { LeftArrow } from '../../../components/ArrowButtons';
import { ApplyButton } from '../../../components/RoundButton';
import { loremIpsum } from '../../../constants';

type Props = {
  leftArrowClickHandler: () => null | void;
};
const NewAndBlogsDetails: React.FC<Props> = ({ leftArrowClickHandler }) => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <div>
          <LeftArrow clickHandler={leftArrowClickHandler} />
        </div>
        <div className="ml-6 font-display text-xl font-semibold">
          News and Blog
        </div>
      </div>

      <div className="flex mt-16">
        <div className="mr-6">
          <img
            className="w-full h-auto"
            src="/NewsAndBlogs/NewsImage-1.png"
            alt="news-1"
          />
          <div className="mt-10 w-32">
            <ApplyButton label="Visit Website" />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between items-center">
            <div className="font-inter text-sm font-medium text-gray-600">
              DESIGN
            </div>
            <div className="font-inter font-semibold text-xs text-gray-600">
              15 mins/Desigboom/ 12h
            </div>
          </div>
          <div className="font-display text-2xl font-semibold mt-2 mb-6">
            Trending Patterns used in Fashion Week
          </div>
          <div className="font-body text-gray-700 font-medium">
            {loremIpsum}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAndBlogsDetails;
