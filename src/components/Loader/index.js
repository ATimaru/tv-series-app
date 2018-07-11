import React from 'react';
import loaderSrc from '../../assets/loading.gif';

const Loader = props => (
  <div>
    <img
      style={{ width: 50 }}
      alt='Loader icon'
      src={loaderSrc} />
  </div>
);

export default Loader;
