import React from 'react';
import axios from 'axios';
import WriteTemplate from 'Components/templates/Write';

const Write = () => {
  const writePost = async (data) => {
    try {
      console.log(data);
      const response = await axios.post('/posts', data);
      console.log('response: ', response);
    } catch (e) {
      console.log('writePost api error: ', e);
    }
  };
  return <WriteTemplate writePost={writePost} />;
};

export default Write;
