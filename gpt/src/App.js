import React from 'react';

import "./App.scss";
import { Footer, Header, Map, Navbar } from './components';
import { Change, Equality, Leaders }  from './container';

const App = () => {
    return (
    <div className='app'>
      <Navbar />
      <Header>
        <video autoPlay="autoplay" loop="loop" muted width="100%" >
          <source src='https://girlpowertalk.com/wp-content/uploads/2022/03/Team-Girl-Power-Talk-2.mp4' type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </Header>
      <Equality />
      <Change />
      <Leaders />
      <Map />
      <Footer />
    </div>
    );
}

export default App;
