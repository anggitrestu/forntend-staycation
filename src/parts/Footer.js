import React from 'react';
import Button from 'elements/Button';
import IconText from 'parts/IconText';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <IconText />
            <p className=" brand-textline">
              We kaboom your beauty holiday instanly and memorably.
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginner</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5 ml-3">
            <h6 className="mt-2">Explore Use</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Term & Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 ">
            <h6 className="mt-2">Contact Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  type="link"
                  isExternal
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" isExternal href="tel:+6281374373918">
                  6281374373918
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Klaten , Jawa Tengah</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights mt-3 mb-3">
            copyrights. all right reserved by anggit restu abadi
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
