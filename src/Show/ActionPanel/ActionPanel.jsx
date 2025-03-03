import React, { useState } from 'react';

const ActionsPanel = () => {
  const [hearts, setHearts] = useState(0);

  // Function to increment hearts
  const incrementHearts = () => {
    // This uses the callback pattern useful for queued state updates
    // In other cases setState can take a direct variable
    setHearts(hearts => hearts + 1);
  };

  return (
    <div>
      <p>Hearts: {hearts}</p>
      <button onClick={incrementHearts}>Add Heart</button>
    </div>
  );
};

export default ActionsPanel;
