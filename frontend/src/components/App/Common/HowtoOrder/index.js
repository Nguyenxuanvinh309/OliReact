import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import chooseImage from './images/choose-food.svg';
import foodwayImage from './images/foodway.svg';
import addressImage from './images/add-address.svg';
import paymentImage from './images/payment.svg';

const custom_ui = {
	bckBlock: {
		background: "#fff",
		paddingTop: 120,
		paddingBottom: 120,
	},
	itemtoor: {
		borderRadius: 20,
		paddingTop: 60,
		paddingBottom: 60,
	},
	imageSymbol: {
		display: "table",
		margin: "auto",
		height: 69,
	}
};

class HowtoOrder extends Component {  
  render() {
    return (
    	<div style={custom_ui.bckBlock}>
    		<div className="container contain-toorder">
    			<div className="row">
    				<div className="col-md-12">
    					<div className="head-toorder">
			    			<p className="title">How to order</p>
			    			<p className="text">Follow the Steps</p>
			    		</div>
    				</div>
    			</div>

    			<div className="row body-toorder">
    				<div className="col-12 col-sm-6 col-md-3 col-toorder">
  						<div style={custom_ui.itemtoor} className="item">
  							<img src={chooseImage} alt="choose-food" style={custom_ui.imageSymbol} />
			    			<div className="description">
			    				<p className="title">Choose food</p>
									<p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
			    			</div>
			    		</div>
	    			</div>
	    			<div className="col-12 col-sm-6 col-md-3 col-toorder">
  						<div style={custom_ui.itemtoor} className="item">
  							<img src={addressImage} alt="choose-food" style={custom_ui.imageSymbol} />
			    			<div className="description">
			    				<p className="title">Choose food</p>
									<p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
			    			</div>
			    		</div>
	    			</div>
	    			<div className="col-12 col-sm-6 col-md-3 col-toorder">
  						<div style={custom_ui.itemtoor} className="item">
  							<img src={paymentImage} alt="choose-food" style={custom_ui.imageSymbol} />
			    			<div className="description">
			    				<p className="title">Choose food</p>
									<p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
			    			</div>
			    		</div>
	    			</div>
	    			<div className="col-12 col-sm-6 col-md-3 col-toorder">
  						<div style={custom_ui.itemtoor} className="item">
  							<img src={foodwayImage} alt="choose-food" style={custom_ui.imageSymbol} />
			    			<div className="description">
			    				<p className="title">Choose food</p>
									<p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
			    			</div>
			    		</div>
	    			</div>
    			</div>
    		</div>
    	</div>
    );
  }
}
export default HowtoOrder;