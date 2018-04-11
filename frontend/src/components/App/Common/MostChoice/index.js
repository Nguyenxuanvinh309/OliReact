import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import imageMost1 from './images/most-image-1.png';
import imageVote from './images/vote-symbol.svg';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const spacingMost = {
	paddingTop: 120,
	paddingBottom: 120,
};

const custom_ui = {
	rowColor: {
		color: "#000",
	},
	rowBorder: {
		border: "none",
	},
	textRightRow: {
		textAlign: "right",
	},
	heightAuto: {
		height: 'auto',
	},
	textTitle: {
		color: '#689F39',
		fontSize: 18,
		lineHeight: '21px',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 15,
	},
	textNormal: {
		color: '#696969',
		fontSize: 13,
		lineHeight: '15px',
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 15,
	},
	textBold: {
		color: '#383838',
		fontWeight: 700,
		fontSize: 12,
		lineHeight: '14px',
		paddingLeft: 20,
		paddingRight: 20,	
		paddingTop: 15,
		paddingBottom: 15,
	},
	voteStyle: {
		color: '#808080',
		fontWeight: 700,
		fontSize: 16,
		lineHeight: '19px',
		paddingLeft: 12,
		paddingRight: 12,
		paddingTop: 15,
		paddingBottom: 15,
		width: 85,
		borderLeft: '1px solid #DEDEDE',
		cursor: 'pointer',
	},
	borderTable: {
		border: '1px solid #DEDEDE',
	},
	borderTopTable: {
		borderTop: '1px solid #DEDEDE',
	}, 
	voteimage: {
		marginRight: 8,
		cursor: 'pointer',
	}
};

class MostChoice extends Component {  
  render() {
    return (
    	<div style={spacingMost} > 
	    	<div className="container contain-mostchoice">
	    		<div className="row">
	    			<div className="col-md-12">
	    				<div className="head-mostchoice">
	    					<p className="title">Clients’ Most Popular ChoiCe</p>
	    					<p className="text">The easiest way to have your favourite food</p>
	    				</div>

	    				<div className="navbar-mostchoice">
	    					<ul className="navbar-group">
	    						<li className="item active">RESTAURANT</li>
	    						<li className="item">RESTAURANT</li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>

	    		<div className="row">
	    			<div className="col-md-4 col-mostchoice">
	    				<div style={{background: "url(" + imageMost1 + ")" }} className="image-mostchoice">
	    				</div>
	    				<div style={custom_ui.borderTable}>
		    				<Table>
							    <TableBody displayRowCheckbox={false}>
							      <TableRow style={{...custom_ui.rowBorder, ...custom_ui.heightAuto}} >
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.heightAuto, ...custom_ui.textTitle}} 
							        >Maenaam Thai Restaurant</TableRowColumn>
							      </TableRow>
							      <TableRow style={{...custom_ui.rowBorder, ...custom_ui.heightAuto}}>
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.heightAuto, ...custom_ui.textNormal}}
							        >6/10 Smith Street BAY NSW 2055</TableRowColumn>
							      </TableRow>
							    </TableBody>
							  </Table>
							  <Table style={custom_ui.borderTopTable}>
							    <TableBody displayRowCheckbox={false}>
							      <TableRow style={custom_ui.heightAuto}>
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.heightAuto, ...custom_ui.textBold}}
							        	>Burgers, American, Sandwiches, Fast Food, Fast
							        </TableRowColumn>
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.textRightRow, ...custom_ui.heightAuto, ...custom_ui.voteStyle}}
							        	><img src={imageVote} style={custom_ui.voteimage} /><span>132</span>
							        </TableRowColumn>
							      </TableRow>
							    </TableBody>
							  </Table>
							</div>
	    			</div>
	    			<div className="col-md-4 col-mostchoice">
	    				<div style={{background: "url(" + imageMost1 + ")" }} className="image-mostchoice">
	    				</div>
	    				<div style={custom_ui.borderTable}>
		    				<Table>
							    <TableBody displayRowCheckbox={false}>
							      <TableRow style={{...custom_ui.rowBorder, ...custom_ui.heightAuto}} >
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.heightAuto, ...custom_ui.textTitle}} 
							        >Maenaam Thai Restaurant</TableRowColumn>
							      </TableRow>
							      <TableRow style={{...custom_ui.rowBorder, ...custom_ui.heightAuto}}>
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.heightAuto, ...custom_ui.textNormal}}
							        >6/10 Smith Street BAY NSW 2055</TableRowColumn>
							      </TableRow>
							    </TableBody>
							  </Table>
							  <Table style={custom_ui.borderTopTable}>
							    <TableBody displayRowCheckbox={false}>
							      <TableRow style={custom_ui.heightAuto}>
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.heightAuto, ...custom_ui.textBold}}
							        	>Burgers, American, Sandwiches, Fast Food, Fast
							        </TableRowColumn>
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.textRightRow, ...custom_ui.heightAuto, ...custom_ui.voteStyle}}
							        	><img src={imageVote} style={custom_ui.voteimage} /><span>132</span>
							        </TableRowColumn>
							      </TableRow>
							    </TableBody>
							  </Table>
							</div>
	    			</div>
	    			<div className="col-md-4 col-mostchoice">
	    				<div style={{background: "url(" + imageMost1 + ")" }} className="image-mostchoice">
	    				</div>
	    				<div style={custom_ui.borderTable}>
		    				<Table>
							    <TableBody displayRowCheckbox={false}>
							      <TableRow style={{...custom_ui.rowBorder, ...custom_ui.heightAuto}} >
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.heightAuto, ...custom_ui.textTitle}} 
							        >Maenaam Thai Restaurant</TableRowColumn>
							      </TableRow>
							      <TableRow style={{...custom_ui.rowBorder, ...custom_ui.heightAuto}}>
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.heightAuto, ...custom_ui.textNormal}}
							        >6/10 Smith Street BAY NSW 2055</TableRowColumn>
							      </TableRow>
							    </TableBody>
							  </Table>
							  <Table style={custom_ui.borderTopTable}>
							    <TableBody displayRowCheckbox={false}>
							      <TableRow style={custom_ui.heightAuto}>
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.heightAuto, ...custom_ui.textBold}}
							        	>Burgers, American, Sandwiches, Fast Food, Fast
							        </TableRowColumn>
							        <TableRowColumn 
							        	className="text-mostchoice"
							        	style={{...custom_ui.rowColor, ...custom_ui.textRightRow, ...custom_ui.heightAuto, ...custom_ui.voteStyle}}
							        	><img src={imageVote} style={custom_ui.voteimage} /><span>132</span>
							        </TableRowColumn>
							      </TableRow>
							    </TableBody>
							  </Table>
							</div>
	    			</div>
	    		</div>
	    	</div>
    	</div>
    );
  }
}
export default MostChoice;