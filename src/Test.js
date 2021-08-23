import React from 'react';
import { Form } from 'react-final-form';

const Test= ({
  testProp,
}) => (
  <Form
    onSubmit={() => {}}
    render={() => (
      <React.Fragment>
        <span>{testProp}</span>
        <hello>hello</hello>
      </React.Fragment>
    )}
  />
);

export default Test;
