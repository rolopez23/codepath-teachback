import React from 'react';
import ActionsPanel from './ActionPanel/ActionPanel.jsx';
import PostWithComments from './PostWithComments/PostWithComments.jsx';

const Show = ({ name, synopsis, seasons }) => {
  const yourReview = {
    text: "This show is amazing!",
    favorite: 2,
    rating: 10
  }
  
  return (
  <div>
    <h1>{name}</h1>
    <ActionsPanel />
    {yourReview && <PostWithComments review={yourReview.text}/>}
    <p>{synopsis}</p>
    <p>Number of Seasons: {seasons.length}</p>
  </div>
)};

export default Show;
