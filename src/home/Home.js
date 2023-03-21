import React from 'react';
import Photo from './../test.png';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my test app</h1>
      <p>This is just an example of what you can do with react</p>
      <img src={Photo} alt="No" />
    </div>
  );
};

export default Home;
