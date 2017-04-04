import React, {PropTypes} from 'react';

const Form  = (props) => {
  return (<form className="add-container" onSubmit={props.onSubmit}>
    { props.children }
  </form>);
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
