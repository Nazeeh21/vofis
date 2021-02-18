import React from 'react';
import { NewsPanelRightComponentProps } from '../../../sharedTypes/RightComponentTypes';
import ActionListItem from '../ActionListItem';
import NewsPanelRightCompItem from './NewsPanelRightCompItem';

const actionListitems = ['Add new feed', 'Edit feed list', 'Add RSS feed'];

const NewsPanelRightComp: React.FC<NewsPanelRightComponentProps> = ({
  items,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="font-body text-xl font-bold">Sections</div>
        <div className="w-6">
          <img
            className="w-full h-full"
            src="/NewsRightComp/edit.png"
            alt="edit"
          />
        </div>
      </div>
      <div className="overflow-y-auto h-96">
        {items.map((item, index) => (
          <NewsPanelRightCompItem label={item.label} key={index} />
        ))}
        <div className="flex items-center">
          <img className="cursor-pointer" src="/add.png" alt="add" />
          <div className="cursor-pointer ml-2 font-body text-blue">
            Add new section
          </div>{' '}
        </div>
      </div>
      <div>
        <div className="font-body font-bold mt-4">
          Quick actions
          <div className="mt-4">
            {actionListitems.map((item, index) => (
              <div key={index} className="mb-2">
                <ActionListItem label={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPanelRightComp;
