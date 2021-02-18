import React from 'react';
import { loremIpsum } from '../../constants';

const NewsAndBlogComponent: React.FC = () => {
  return (
    <div className="w-full flex">
      <div className="w-4/12" />
      <div className="w-8/12 mr-6">
        <img
          className="w-full h-full"
          src="/NewsAndBlogs/NewsImage-1.png"
          alt="news-1"
        />
      </div>
      <div>
        <div className="font-inter text-sm text-gray-600 font-medium">
          MEDIUM/ 6H
        </div>
        <div className="font-display text-2xl font-semibold mt-2 mb-4">
          Trending Patterns used in Fashion Week
        </div>
        <div className="font-body text-gray-700 font-medium">{loremIpsum}</div>
      </div>
      <div className="w-2/12 font-inter text-gray-600 text-xs font-medium">
        15 mins
      </div>
    </div>
  );
};

export default NewsAndBlogComponent;
