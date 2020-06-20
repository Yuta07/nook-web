import React, { useEffect, ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

export const usePortal = (el: ReactNode): ReactPortal => {
  const elem = React.useRef(document.createElement('div')).current;

  useEffect(() => {
    const body = document.querySelector('body');
    body.appendChild(elem);

    return () => {
      body.removeChild(elem);
    };
  }, [elem]);

  return createPortal(el, elem);
};
