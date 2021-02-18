import React, { useState } from 'react';
import NewsAndBlogComponent from '../../components/NewsAndBlogComponent';
import NewAndBlogsDetails from './NewsAndBlogsDetails';

const News: React.FC = () => {
  const [showDetailsPage, setShowDetailsPage] = useState(false);

  if (showDetailsPage) {
    return (
      <NewAndBlogsDetails
        leftArrowClickHandler={() => setShowDetailsPage(false)}
      />
    );
  }
  return (
    <div>
      <div className="flex justify-between">
        <div className="font-display font-semibold text-2xl">
          News and Blogs
        </div>
        <div className="flex text-xs items-baseline">
          Sort:{' '}
          <div className="ml-2 grid grid-cols-2 items-center text-sm">
            Recent
            <div className="ml-1">
              <img src="/filter.png" alt="filter" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div
          className="cursor-pointer"
          onClick={() => setShowDetailsPage(true)}
        >
          <NewsAndBlogComponent />
        </div>
      </div>
      <div className="mt-10">
        <div
          className="cursor-pointer"
          onClick={() => setShowDetailsPage(true)}
        >
          <NewsAndBlogComponent />
        </div>
      </div>
      <div className="mt-10">
        <div
          className="cursor-pointer"
          onClick={() => setShowDetailsPage(true)}
        >
          <NewsAndBlogComponent />
        </div>
      </div>
      <div className="mt-10">
        <div
          className="cursor-pointer"
          onClick={() => setShowDetailsPage(true)}
        >
          <NewsAndBlogComponent />
        </div>
      </div>
    </div>
  );
};

export default News;
