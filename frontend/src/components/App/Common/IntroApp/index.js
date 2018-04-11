import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import appImages from './images/app-images.png';
import appStoreImg from './images/app_store.svg';
import styles from './index.css';

const custom_ui = {
	imageApp: {
		background: 'url('+appImages+')',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		height: 480,
		width: '100%',
	},
	imageAppStore: {
		background: 'url('+appStoreImg+')',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		height: 53,
		width: 170,
	},
	containerPadding: {
		paddingTop: 120,
		paddingBottom: 120,
	},
	imageAppMask: {
		opacity: 0,
		width: '100%',
	}
};

class IntroApp extends Component {  
  render() {
    return (
    	<div className="container" style={custom_ui.containerPadding}>
    		<div className="row">
    			<div className="order-md-6 col-md-6 col-descrp-app">
    				<div className="descip-app">
    					<p className="title">Download the app</p>
    					<p className="title-big">Get Your Favorite Food Fast with the App</p>
    					<p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    					<div style={custom_ui.imageAppStore}></div>
    				</div>
    			</div>
    			<div className="col-md-6">
    				<div style={custom_ui.imageApp} className="app-imagemb">
    					<img src={appImages} style={custom_ui.imageAppMask} alt="app-image" />
    				</div>
    			</div>
    		</div>
    	</div>
    );
  }
}
export default IntroApp;