import React, {PropTypes} from 'react';

const Form  = (props) => {
  return (<form className="add-container" onSubmit={this.addHandler}>
    { props.children }
  </form>);
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
