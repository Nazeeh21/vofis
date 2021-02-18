import React, { useState } from 'react';
import { LeftArrow, RightArrow } from '../../components/ArrowButtons';
import ProjectUpdatesItems from '../../components/ProjectUpdatesItems';
import { ProjectUpdateData as ProjectUpdate } from '../../components/sharedData';

// const ProjectUpdate = [
//   [
//     {
//       src: '/ProjectUpdates/review-required.png',
//       alt: 'review-required',
//       heading: 'Review Required',
//       description: 'Commented on Vofis design',
//       headingColor: '#9C2B23',
//       rightContent: <div className="text-sm text-gray-500">4m</div>,
//     },
//     {
//       src: '/ProjectUpdates/draft-doc.png',
//       alt: 'draft-doc',
//       heading: 'Draft.doc added',
//       description: 'New file added to the pencil pros',
//       headingColor: '#19191D',
//     },
//     {
//       src: '/ProjectUpdates/calender.png',
//       alt: 'calender',
//       heading: '9:00AM . Team Meetup',
//       description: 'The Design Congress',
//       headingColor: '#19191D',
//       rightContent: (
//         <RightArrow
//           clickHandler={() => {
//             return;
//           }}
//         />
//       ),
//     },
//     {
//       src: '/ProjectUpdates/cup.png',
//       alt: 'cup',
//       heading: 'Design PRO Cup',
//       description: 'Purchased recently',
//       headingColor: '#19191D',
//     },
//     {
//       src: '/ProjectUpdates/review-approved.png',
//       alt: 'review-approved',
//       heading: 'Review approved',
//       description: '8 successful checks',
//       headingColor: '#2B662E',
//       rightContent: <div className="text-sm text-gray-500">4m</div>,
//     },
//   ],
//   [
//     {
//       src: '/ProjectUpdates/review-required.png',
//       alt: 'review-required',
//       heading: 'Review Required 2',
//       description: 'Commented on Vofis design 2',
//       headingColor: '#9C2B23',
//       rightContent: <div className="text-sm text-gray-500">14m</div>,
//     },
//     {
//       src: '/ProjectUpdates/draft-doc.png',
//       alt: 'draft-doc',
//       heading: 'Draft.doc added 2 ',
//       description: 'New file added to the pencil pros 2',
//       headingColor: '#19191D',
//     },
//     {
//       src: '/ProjectUpdates/calender.png',
//       alt: 'calender',
//       heading: '9:00AM . Team Meetup',
//       description: 'The Design Congress 2',
//       headingColor: '#19191D',
//       rightContent: (
//         <RightArrow
//           clickHandler={() => {
//             return;
//           }}
//         />
//       ),
//     },
//     {
//       src: '/ProjectUpdates/cup.png',
//       alt: 'cup',
//       heading: 'Design PRO Cup 2',
//       description: 'Purchased recently 2',
//       headingColor: '#19191D',
//     },
//     {
//       src: '/ProjectUpdates/review-approved.png',
//       alt: 'review-approved',
//       heading: 'Review approved 2 ',
//       description: '8 successful checks 2',
//       headingColor: '#2B662E',
//       rightContent: <div className="text-sm text-gray-500">14m</div>,
//     },
//   ],
//   [
//     {
//       src: '/ProjectUpdates/review-required.png',
//       alt: 'review-required',
//       heading: 'Review Required',
//       description: 'Commented on Vofis desig 3',
//       headingColor: '#9C2B23',
//       rightContent: <div className="text-sm text-gray-500">24m</div>,
//     },
//     {
//       src: '/ProjectUpdates/draft-doc.png',
//       alt: 'draft-doc',
//       heading: 'Draft.doc added',
//       description: 'New file added to the pencil pros',
//       headingColor: '#19191D',
//     },
//     {
//       src: '/ProjectUpdates/calender.png',
//       alt: 'calender',
//       heading: '9:00AM . Team Meetup',
//       description: 'The Design Congress',
//       headingColor: '#19191D',
//       rightContent: (
//         <RightArrow
//           clickHandler={() => {
//             return;
//           }}
//         />
//       ),
//     },
//     {
//       src: '/ProjectUpdates/cup.png',
//       alt: 'cup',
//       heading: 'Design PRO Cup',
//       description: 'Purchased recently',
//       headingColor: '#19191D',
//     },
//     {
//       src: '/ProjectUpdates/review-approved.png',
//       alt: 'review-approved',
//       heading: 'Review approved',
//       description: '8 successful checks',
//       headingColor: '#2B662E',
//       rightContent: <div className="text-sm text-gray-500">4m</div>,
//     },
//   ],
//   [
//     {
//       src: '/ProjectUpdates/review-required.png',
//       alt: 'review-required',
//       heading: 'Review Required',
//       description: 'Commented on Vofis design',
//       headingColor: '#9C2B23',
//       rightContent: <div className="text-sm text-gray-500">4m</div>,
//     },
//     {
//       src: '/ProjectUpdates/draft-doc.png',
//       alt: 'draft-doc',
//       heading: 'Draft.doc added',
//       description: 'New file added to the pencil pros',
//       headingColor: '#19191D',
//     },
//     {
//       src: '/ProjectUpdates/calender.png',
//       alt: 'calender',
//       heading: '9:00AM . Team Meetup',
//       description: 'The Design Congress',
//       headingColor: '#19191D',
//       rightContent: (
//         <RightArrow
//           clickHandler={() => {
//             return;
//           }}
//         />
//       ),
//     },
//     {
//       src: '/ProjectUpdates/cup.png',
//       alt: 'cup',
//       heading: 'Design PRO Cup',
//       description: 'Purchased recently',
//       headingColor: '#19191D',
//     },
//     {
//       src: '/ProjectUpdates/review-approved.png',
//       alt: 'review-approved',
//       heading: 'Review approved',
//       description: '8 successful checks',
//       headingColor: '#2B662E',
//       rightContent: <div className="text-sm text-gray-500">4m</div>,
//     },
//   ],
// ];

const ProjectUpdates: React.FC = () => {
  const [index, setIndex] = useState(1);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-gray-700 font-semibold text-2xl font-display">
          Project Updates
        </div>
        <div className="flex items-center">
          <LeftArrow
            disableCursor={index === 1}
            clickHandler={() => {
              // document.getElementById(
              //   'project-updates-dashboard'
              // ).scrollLeft -= 70;
              if (index !== 1) {
                setIndex((prevState) => prevState - 1);
              }
              return;
            }}
          />
          <div className="text-xl font-semibold text-gray-600 font-display mx-6">
            0{index} / 0{ProjectUpdate.length}
          </div>
          {/* <div className={`${index - 1 === ProjectUpdate.length && 'cursor-not-allowed'}`}> */}
          <RightArrow
            disableCursor={index == ProjectUpdate.length}
            clickHandler={() => {
              // document.getElementById(
              //   'project-updates-dashboard'
              // ).scrollLeft += 70;
              if (index !== ProjectUpdate.length) {
                setIndex((prevState) => prevState + 1);
              }
              return;
            }}
          />
        </div>
        {/* </div> */}
      </div>
      <div id="project-updates-dashboard" className="mt-6 flex overflow-x-auto">
        {/* {ProjectUpdate.map((items, index) => (
          <div className="mr-16" key={index}>
            <ProjectUpdatesItems items={items} />
          </div>
        ))} */}
        <ProjectUpdatesItems items={ProjectUpdate[index - 1]} />
      </div>
    </div>
  );
};

export default ProjectUpdates;
