import React from 'react';
// import BackgroundImage from '../../../../public/background.png';

const TextureBackground: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${'/background.png'})`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'repeat',
        zIndex: -10,
      }}
      className="fixed text-body"
    >
      {/* {children} */}
    </div>
  );
};

export default TextureBackground;
