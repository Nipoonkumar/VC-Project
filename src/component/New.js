import React from 'react';

const MainComponent = ({ id, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default MainComponent;

