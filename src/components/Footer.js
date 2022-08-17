import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import { faAngry, faHeart, faSadCry, faSmile } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <Container fluid className="mt-4">
      <div className="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-2 item">
                <h3>Produk</h3>
                <ul>
                  <li>
                    <a href="#">Kaos</a>
                  </li>
                  <li>
                    <a href="#">Hoodie</a>
                  </li>
                  <li>
                    <a href="#">Sweater</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-2 item">
                <h3>Tentang Kami</h3>
                <ul>
                  <li>
                    <a href="#">Perusahaan</a>
                  </li>
                  <li>
                    <a href="#">Tim</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                {/* <h3>Careers</h3>
                <ul>
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                  <li>
                    <a href="#">Employee success</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                </ul> */}
              </div>
              <div className="col-lg-3 item social">
                <a href="#">
                  <FontAwesomeIcon icon={faHeart} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faSmile} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faSadCry} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faAngry} />
                </a>
                <p className="copyright">Pasar © 2022</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Container>
  );
}

export default Footer;
