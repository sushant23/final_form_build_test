import React from 'react';
import { Form } from 'react-final-form';

const AddEditPhoneField = ({
  phone,
}) => (
  <Form
    onSubmit={() => {}}
    render={() => (
      <React.Fragment>
        <span>{phone}</span>
      </React.Fragment>
    )}
  />
);

AddEditPhoneField.propTypes = {
};

export default AddEditPhoneField;
