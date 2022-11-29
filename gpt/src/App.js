import React from 'react';

import "./App.scss";
import { Header, Navbar } from './components';
import Equality from './container/Equality';

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
    </div>
    );
}

export default App;
