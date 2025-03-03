import React from 'react';

const ActionsPanel = () => {
  let hearts = 0;

  return (
    <div>
      <p>Hearts: {hearts}</p>
      <button onClick={()=>{
        console.log('This should add a heart')
        hearts += 1;
        console.log('hearts', hearts)
      }}>Add Heart</button>
    </div>
  );
};

export default ActionsPanel;
