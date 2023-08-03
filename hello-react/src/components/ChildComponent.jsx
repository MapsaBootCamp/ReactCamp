import React, { memo } from 'react';

const ChildComponent = memo(function ChildComponent({ testUseCallback }) {
  console.log('CHILD COMPONENT');
  return <div>ChildComponent</div>;
});

export default ChildComponent;
