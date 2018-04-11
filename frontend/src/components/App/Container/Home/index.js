import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Banner from '../../Common/Banner';
import MostChoice from '../../Common/MostChoice';
import HowtoOrder from '../../Common/HowtoOrder';
import IntroApp from '../../Common/IntroApp';
import LogoBrand from '../../Common/LogoBrand';

class Home extends Component {
  render() {
    return (
    	<div>
      	<Banner></Banner>
      	<MostChoice></MostChoice>
      	<HowtoOrder></HowtoOrder>
      	<IntroApp></IntroApp>
        <LogoBrand></LogoBrand>
      </div>
    );
  }
}
export default Home;