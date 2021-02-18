import React, { useRef, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideDetector(ref, onDetected) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onDetected();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
type Props = {
  children: React.ReactNode;
  onDetected: () => void;
  styles?: string;
};

function OutsideDetector({
  children,
  onDetected,
  styles,
}: Props): React.ReactElement {
  const wrapperRef = useRef(null);
  useOutsideDetector(wrapperRef, onDetected);

  return (
    <div className={styles} ref={wrapperRef}>
      {children}
    </div>
  );
}

export default OutsideDetector;
