import React, { useEffect } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteDataUser, setUser } from '../actions/userAction';
import { Link, useNavigate } from 'react-router-dom';
import { LandingPage } from '../asset/img';
import './style.css';

function Login() {
  useEffect(() => {
    document.title = 'Pasar App';
    dispatch(deleteDataUser());
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch(setUser(true));
    // dispatch(setUser(user)); set jadi true (true||false)
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };
  return (
    <>
      <Container fluid>
        <div className="landing-page mt-4 ">
          <Row>
            <Col className="align-self-center text-center">
              <h4 className="mb-5" style={{ fontSize: '2.5vmax' }}>
                Temukan pakaian <strong>Murah</strong> dan <strong>Berkualitas</strong>
              </h4>
              <Button
                style={{ width: '20vmax', fontSize: '1.5vmax' }}
                variant="outline-dark"
                onClick={() => {
                  handleClick('pembeli');
                }}
              >
                Mulai Berbelanja
              </Button>
            </Col>
            <Col>
              <img src={LandingPage} alt="img" className="landing-img" />
            </Col>
          </Row>
        </div>
        <h2 className="mt-5 fw-bold text-center" style={{ fontSize: '3vmax' }}>
          Beraneka Ragam Pakaian
        </h2>

        {/* kaos */}
        <div className="item-wrapper">
          <div className="items mt-5 ">
            <Row>
              <Col>
                <div className="text-desc text-center">
                  <h3 style={{ fontSize: '1.5vmax' }}>T-Shirt</h3>
                  <Link to="/home/T-Shirt">
                    <Button variant="outline-dark" style={{ width: '13vmax', fontSize: '1.5vmax', padding: '0' }}>
                      Cari T-Shirt
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col>
                <img src={LandingPage} alt="img" className="img-desc" />
              </Col>
            </Row>
          </div>
        </div>
        {/* hoodie */}
        <div className="item-wrapper">
          <div className="items mt-5 ">
            <Row>
              <Col>
                <img src={LandingPage} alt="img" className="img-desc" />
              </Col>
              <Col>
                <div className="text-desc text-center">
                  <h3 style={{ fontSize: '1.5vmax' }}>Hoodie</h3>
                  <Link to="/home/Hoodie">
                    <Button variant="outline-dark" style={{ width: '13vmax', fontSize: '1.5vmax', padding: '0' }}>
                      Cari Hoodie
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* hoodie */}
        <div className="item-wrapper">
          <div className="items mt-5 ">
            <Row>
              <Col>
                <div className="text-desc text-center">
                  <h3 style={{ fontSize: '1.5vmax' }}>Sweater</h3>
                  <Link to="/home/Sweater">
                    <Button variant="outline-dark" style={{ width: '13vmax', fontSize: '1.5vmax', padding: '0' }}>
                      Cari Sweater
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col>
                <img src={LandingPage} alt="img" className="img-desc" />
              </Col>
            </Row>
          </div>
        </div>
        <br />
        <hr className="" />
        <div className="mt-5 card-login">
          <Row className="text-center">
            <Col>
              <Card style={{ maxWidth: '18rem', width: '100%' }} className="card-item">
                <Card.Body>
                  <Card.Title>Bahan</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className="card-item">
                <Card.Body>
                  <Card.Title>Pengiriman</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className="card-item">
                <Card.Body>
                  <Card.Title>Harga</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <Button
                className="p-3 fw-bold"
                onClick={() => {
                  handleClick('pembeli');
                }}
              >
                Masuk Sebagai Pembeli
              </Button>
            </Col>
            <Col>
              <Button
                className="p-3 fw-bold"
                onClick={() => {
                  handleClick('penjual');
                }}
              >
                Masuk Sebagai Penjual
              </Button>
            </Col>
          </Row> */}
        </div>
      </Container>
    </>
  );
}

export default Login;
