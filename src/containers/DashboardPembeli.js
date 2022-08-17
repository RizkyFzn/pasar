import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BackComponent from '../components/BackComponent';
import ListCategories from '../components/ListCategories';
import ProductComponent from '../components/ProductComponent';
import './style.css';

function DasboardPembeli() {
  useEffect(() => {
    document.title = 'Pasar | Belanja';
  }, []);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <BackComponent />
          </Col>
          <Col xs={8} className="mt-4">
            <h2 className="text-center">Cari semua kebutuhanmu disini</h2>
          </Col>
          <Col className="btn-wishlist">
            <Link to="/keranjang">
              <Button className="">
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
            </Link>
          </Col>
        </Row>

        <ListCategories />
        <ProductComponent />
      </Container>
    </>
  );
}

export default DasboardPembeli;
