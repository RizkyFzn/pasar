import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Button, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteWishlist, getWishlist } from '../actions/userAction';
import BackComponent from './BackComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';

function Hasil() {
  const [count, setCount] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.products.getWishlist);
  useEffect(() => {
    // window.location.reload(false);
    document.title = 'Pasar | Keranjang';
    dispatch(getWishlist());
  }, [count]);

  const handleRemove = (id) => {
    dispatch(deleteWishlist(id));
    setCount(!count);
  };

  const handleBeli = (data) => {
    swal({
      title: 'Pembayaran',
      text: `Total belanja anda adalah Rp. ${data}`,
      // icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((bayar) => {
      if (bayar) {
        swal('Silahkan Transfer !!', {
          icon: 'success',
        });
      } else {
        swal('Pembayaran Dibatalkan', {
          icon: 'warning',
        });
      }
    });
  };

  const handleCheckoutAll = () => {
    let totalHarga = 0;
    wishlist.map((data) => {
      totalHarga += data.harga;
      return <></>;
    });
    swal({
      title: 'Pembayaran',
      text: `Total belanja anda adalah Rp. ${totalHarga}`,
      // icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((bayar) => {
      if (bayar) {
        swal('Silahkan Transfer !!', {
          icon: 'success',
        });
      } else {
        swal('Pembayaran Dibatalkan');
      }
    });
  };

  if (!wishlist || wishlist.length === 0) {
    return (
      <Container>
        <BackComponent />
        <div className="text-center">
          <p>Keranjang Kosong</p>
          <p>Kembali ke halaman awal</p>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <BackComponent />
        <Container className="mt-5 text-center">
          <Button onClick={handleCheckoutAll} className="mb-4">
            Checkout <br />
            Semua
          </Button>
          <Row>
            {wishlist.map((data) => {
              return (
                <Col className="justify-content-center" key={data.id}>
                  <Card style={{ width: '15rem' }} className="flex">
                    {/* <Card.Img variant="top" src={data.gambar} alt="img" /> */}
                    <Card.Body>
                      <Card.Title>{data.nama}</Card.Title>
                      <Card.Text>Rp {data.harga}</Card.Text>
                      <Button
                        variant="outline-dark"
                        className="card-button"
                        onClick={() => {
                          handleBeli(data.harga);
                        }}
                      >
                        Beli Sekarang
                      </Button>
                      <Button
                        variant="danger"
                        className="ms-2"
                        onClick={() => {
                          handleRemove(data.id);
                        }}
                      >
                        -<FontAwesomeIcon icon={faCartShopping} />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Hasil;
