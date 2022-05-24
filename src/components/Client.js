import React from 'react';

const Client = (username) => {
  return (
    <div className="client">
      <Avatar />
      <span className="userName">{username}</span>
    </div>
  );
};

export default Client;
