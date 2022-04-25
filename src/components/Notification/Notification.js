import React from 'react';
import propTypes from 'prop-types';
const Notification = ({ message }) => {
  return <h3>{message}</h3>;
};
export default Notification;
Notification.propTypes = {
  message: propTypes.string,
};
