import React from 'react';

type Props = {
  show: boolean;
  clicked: () => null | void;
};

const BackDrop: React.FC<Props> = ({ show, clicked }) =>
  show && <div className="Backdrop" onClick={clicked}></div>;

export default BackDrop;
