import React from 'react';

const ErrMessage = ({ message, className }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={className}>
      {message}
    </div>
  );
};

export default ErrMessage;