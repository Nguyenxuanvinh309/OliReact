import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import cardfooter from './images/card-footer.png';
import logofooter from './images/logo-footer.svg';
import facesbol from './images/face-sbol.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="bk-footer">
        <div className="container content">
          <div className="row">
            <div className="col-sm-12 col-md-4 order-md-4">
              <a href="/"><img src={logofooter} className="logo-footer" /></a>
              <ul className="list-footer">
                <li className="item"><a href="#" className="link">contact us</a></li>
                <li className="item"><a href="#" className="link">term of use</a></li>
                <li className="item"><a href="#" className="link">site map</a></li>
                <li className="item"><a href="#" className="link">privacy policy</a></li>
              </ul>
            </div>

            <div className="col-sm-12 col-md-4 order-md-4">
              <div className="right-footer">
                <p className="text-footer label">Connect with:</p>
                <div className="group-btn-footer">
                <a href="#"><div className="facesbol-footer"></div></a>
                <a href="#"><div className="googlesbol-footer"></div></a>
                </div>
                <p className="text-footer label">Now App</p>
                <a href="#"><div className="app-btn-footer"></div></a>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <p className="text-footer secure">Secure payments with</p>
              <img src={cardfooter} className="card-img-footer" />
              <p className="text-footer">©2018 olivery.com, <br/>Synova-Solutions all right reserved</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;