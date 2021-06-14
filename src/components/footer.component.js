import React, { Component } from 'react';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cash from '../images/cash.svg';
import visa from '../images/visa.svg';
import mastercard from '../images/mastercard.svg';
import blue from '../images/blue.svg';

import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import { Button } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (

      <footer class="site-footer container-fluid">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 col-md-4 foot">
              <h3 className="footerHeader">yeshtery</h3>
              <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
               incididunt ut labore et dolore magna aliqua. <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br />ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse <br />cillum dolore eu fugiat nulla pariatur
             consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div class="col-sm-12 col-md-4 foot">
              <h5>Subscribe to our newsletter</h5>
              <input type="text" placeholder="  Enter your Email" className="subscribeInput"/>
              <Button className="SubscribeButton">Subscribe <FontAwesomeIcon icon={faPaperPlane} /></Button>
              <div className="row">
            <div class="col-xs-6 col-md-3">
              <ul class="footer-links">
                <li class="footerList1">About Us</li>
                <li class="footerList1">Contact Us</li>
                <li class="footerList1">Track Order</li>
                <li class="footerList1">Terms & Conditions</li>
                <li class="footerList1">Privacy Policy</li>
                <li class="footerList1">Sell With Us</li>
                <li>Shipping And Returns</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <ul class="footer-links">
                <li><img src={facebook} alt="facebook"  height="25px" className="threeIcons"/>/YESHTERY</li>
                <li><img src={linkedin} alt="linkedin"  height="25px" className="threeIcons"/>/YESHTERY</li>
                <li><img src={instagram} alt="instagram"  height="25px" className="threeIcons"/>/YESHTERY</li>
                <li><img src={twitter} alt="twitter"  height="25px" className="threeIcons"/>/YESHTERY</li>
              </ul>
            </div>
            </div>
</div>

          </div>
          <hr />
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12 foot2">
              <p class="copyright-text">
                &copy; 2021 yeshtery, all rights reserved
            </p>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12">
            <img src={cash} alt="cash"  height="40px" className="threeIcons"/>
            <img src={visa} alt="visa"  height="40px" className="threeIcons"/>
            <img src={mastercard} alt="mastercard"  height="40px" className="threeIcons"/>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12">
            <p class="copyright-text">
               Powered By nasnav <img src={blue} alt="blue"  height="30px"/>
            </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;