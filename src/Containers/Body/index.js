import React from 'react';
import Presentation from './presentation';

const BodyContainer = ({
  history,
  path,
}) => {
  return (
    <>
      <Presentation
        history={history}
        path={path}
      />
    </>
  );
};

export default BodyContainer;