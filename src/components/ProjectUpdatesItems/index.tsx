import React from 'react';
import {
  ProjectupdateComponentProps,
  ProjectUpdateItemProps,
} from '../../sharedTypes/projectUpdateComponent';

const ProjectUpdateComponent: React.FC<ProjectupdateComponentProps> = ({
  src,
  alt,
  heading,
  description,
  headingColor,
  rightContent,
}) => {
  return (
    <div className="flex items-center font-inter justify-between">
      <div className="flex items-center font-inter">
        <div className="mr-4">
          <img src={src} alt={alt} />
        </div>
        <div>
          <div
            style={{ color: `${headingColor}` }}
            className="text-lg font-medium"
          >
            {heading}
          </div>
          <div className="text-gray-600 text-sm">{description}</div>
        </div>
      </div>
      {rightContent && <div className="justify-end">{rightContent}</div>}
    </div>
  );
};

const ProjectUpdatesItems: React.FC<ProjectUpdateItemProps> = ({
  items,
  outerDivWidth = '36.5rem',
  style = 'grid grid-cols-2 gap-x-16 gap-y-4',
}) => {
  console.log('Items in ProjectUpdateItems', items);
  return (
    <div style={{ width: outerDivWidth }} className="inline-block">
      <div className={style}>
        {items.map((item, index) => (
          <ProjectUpdateComponent
            key={index}
            src={item.src}
            alt={item.alt}
            heading={item.heading}
            description={item.description}
            headingColor={item.headingColor}
            rightContent={item.rightContent}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectUpdatesItems;
