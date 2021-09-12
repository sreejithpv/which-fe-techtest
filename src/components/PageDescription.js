import React from 'react';
import PropTypes from 'prop-types';

const PageDescription = ({ children  }) => (
  <p data-testid="page-description">{ children }</p>
);

PageDescription.propTypes = {
  children: PropTypes.node,
};

PageDescription.defaultProps = {
  children: null,
}

export default PageDescription;