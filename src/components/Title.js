import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title  }) => (
  <h1 data-testid="title">{ title }</h1>
);

Title.propTypes = {
    title: PropTypes.string,
  };
  
  Title.defaultProps = {
    title: '',
  }

export default React.memo(Title);