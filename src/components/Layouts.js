import React from 'react';
import TwoUpImage from './TwoUpImage';
import SingleImage from './SingleImage';

export default function Layouts({ layouts }) {
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];

      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const randLayouts = shuffle(layouts);

  const Components = {
    twoUpImage: TwoUpImage,
    singleImage: SingleImage,
  };

  return randLayouts.slice(0, 1).map((block, index) => {
    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block,
        index,
      });
    }
  });
}
