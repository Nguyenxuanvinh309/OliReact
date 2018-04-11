import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import logo from '../../../../assets/images/logo.svg';
import styles from './index.css';
import avatar from './images/avatar.png';

const avatarImage = {
  backgroundImage: 'url('+avatar+')',
  backgroundRepeat: 'no-repeat',
  backgroundPositon: 'center',
  backgroundSize: 'cover',
};

const signStyle = {
	display: 'none',
}

class Header extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	value: 1
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
    	<nav className="navbar navbar-expand-lg navbar-light navbar-header bg-green-header">
			  <div className="container container-header">
			  	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <a className="navbar-brand" href="/">
				  	<img src={logo} className="logo-header" />
				  </a>

				  <div className="select-header mobile">
				  	<span className="posSymbolMenu"></span>
					  <DropDownMenu onChange={this.handleChange} >
						  <MenuItem value={1} primaryText="Victoria." />
						  <MenuItem value={2} primaryText="Queensland." />
						  <MenuItem value={3} primaryText="South AustSralia." />
						  <MenuItem value={4} primaryText="Western Australia." />
						  <MenuItem value={5} primaryText="Northern Territory." />
						  <MenuItem value={5} primaryText="Australian Capital Territory." />
					  </DropDownMenu>
				  </div>

				  <div className="collapse navbar-collapse" id="navbarNavDropdown">
				  	<div className="select-header desktop">
						  <DropDownMenu value={this.state.value} onChange={this.handleChange} >
							  <MenuItem value={1} primaryText="Victoria." />
							  <MenuItem value={2} primaryText="Queensland." />
							  <MenuItem value={3} primaryText="South Australia." />
							  <MenuItem value={4} primaryText="Western Australia." />
							  <MenuItem value={5} primaryText="Northern Territory." />
							  <MenuItem value={5} primaryText="Australian Capital Territory." />
						  </DropDownMenu>
						</div>

				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item dropdown">
				        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          Partner
				        </a>
				        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				          <a className="dropdown-item" href="#">Restaurant</a>
				          <a className="dropdown-item" href="#">Grocery</a>
				        </div>
				      </li>
				      <li className="nav-item group">
				        <a className="nav-link item-group-header" href="/signin">Sign in</a>
				        <span className="breakline-header">/</span>
				        <a className="nav-link item-group-header" href="/register">Register</a>
				      </li>

				      <li className="nav-item dropdown account" style={signStyle}>
				      	<a href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="acc-header dropdown-toggle">
				      		<div className="avatar-header" style={avatarImage}></div>
				        	<span className="nav-link avatar-name">Ed Sheeran</span>
				        </a>

				        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				          <a className="dropdown-item" href="#">Account setting</a>
				          <a className="dropdown-item" href="#">Change password</a>
				          <a className="dropdown-item" href="#">Orders history</a>
				          <a className="dropdown-item logout desktop" href="#">Log out</a>
				        </div>
				      </li>

				      <li className="nav-item">
				        <a className="nav-link logout mobile" href="#">Log out</a>
				      </li>
				    </ul>
				  </div>
				</div>
			</nav>
    );
  }
}

export default Header;
