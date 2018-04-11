import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import chefbrandImg from './images/chef-brand.png';
import kefirbrandImg from './images/kefir-brand.png';
import kingofbrandImg from './images/kingof-brand.png';
import lollbrandImg from './images/lollipop-brand.png';
import puffybrandImg from './images/puffy-brand.png';
import smoochebrandImg from './images/smooche-brand.png';
import soupsodabrandImg from './images/soupsoda-brand.png';
import yelorebrandImg from './images/yelore-brand.png';
import styles from './index.css';

const custom_ui = {
	backBrand: {
		background: '#8BC24A',
		padding: '25px 0',
	},
};

class LogoBrand extends Component {  
  render() {
    return (
    	<div style={custom_ui.backBrand} className="banner-backmb">
    		<div className="container">
	    		<div className="row">
	    			<div className="brand-image-area">
	    				<div className="col-6 col-sm-3 brand-block"><div style={{background: 'url('+chefbrandImg+')'}} className="brand-image"></div></div>
	    				<div className="col-6 col-sm-3 brand-block"><div style={{background: 'url('+yelorebrandImg+')'}} className="brand-image"></div></div>
	    				<div className="col-6 col-sm-3 brand-block"><div style={{background: 'url('+kefirbrandImg+')'}} className="brand-image"></div></div>
	    				<div className="col-6 col-sm-3 brand-block"><div style={{background: 'url('+puffybrandImg+')'}} className="brand-image"></div></div>
	    				<div className="col-6 col-sm-3 brand-block"><div style={{background: 'url('+lollbrandImg+')'}} className="brand-image"></div></div>
	    				<div className="col-6 col-sm-3 brand-block"><div style={{background: 'url('+soupsodabrandImg+')'}} className="brand-image"></div></div>
	    				<div className="col-6 col-sm-3 brand-block"><div style={{background: 'url('+smoochebrandImg+')'}} className="brand-image"></div></div>
	    				<div className="col-6 col-sm-3 brand-block"><div style={{background: 'url('+kingofbrandImg+')'}} className="brand-image"></div></div>
	    			</div>
	    		</div>
	    	</div>
    	</div>
    );
  }
}
export default LogoBrand;