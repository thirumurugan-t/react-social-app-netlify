import React from 'react';
import UploadPost from './UploadPost';

const Feed = ({ posts}) => {
 

  return (
    <>
      {posts.map((post,index) => (
        <UploadPost key={index} post={post} />
      ))}
    </>
  );
};

export default Feed;
