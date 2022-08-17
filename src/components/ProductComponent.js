import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addWishlist, getCategories, getProducts, getWishlist } from '../actions/userAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import './style.css';
import swal from 'sweetalert';

function ProductComponent() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const [count, setCount] = useState(false);
  const [query, setQuery] = useState('');
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    dispatch(getWishlist());
  }, [count]);

  const products = useSelector((state) => state.products.getProducts);
  // const user = useSelector((state)  => state.users.user);

  const handleWishlist = (data) => {
    dispatch(addWishlist(data));
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

  // if (user === true) {
  return (
    <>
      <div className="search-bar">
        <input placeholder="Cari Produk" onChange={(e) => setQuery(e.target.value)} className="search mb-4" />
      </div>
      <Row className="gap-3 justify-content-center">
        {products ? (
          category ? (
            products
              .filter((product) => {
                if (product.category.nama === category) {
                  return product;
                }
              })
              .map((product) => (
                <Col key={product.id}>
                  <Card style={{ width: '14rem' }} className="card">
                    <Card.Img variant="top" src={product.gambar} alt="img" className="img-card" />
                    <Card.Body>
                      <Card.Title>{product.nama}</Card.Title>
                      <Card.Text>Rp {product.harga}</Card.Text>
                      <Button
                        variant="outline-dark"
                        className="card-button"
                        onClick={() => {
                          handleBeli(product.harga);
                        }}
                      >
                        Beli Sekarang
                      </Button>

                      <Button
                        variant="info"
                        className="ms-2 card-button"
                        onClick={() => {
                          handleWishlist(product);
                        }}
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
          ) : (
            products
              .filter((product) => {
                if (query === '') {
                  return product;
                } else if (product.nama.toLowerCase().includes(query.toLowerCase())) {
                  return product;
                }
              })
              .map((product) => (
                <Col key={product.id}>
                  <Card style={{ width: '14rem' }} className="card">
                    <Card.Img variant="top" src={product.gambar} alt="img" className="img-card" />
                    <Card.Body>
                      <Card.Title>{product.nama}</Card.Title>
                      <Card.Text>Rp {product.harga}</Card.Text>
                      <Button
                        variant="outline-dark"
                        className="card-button"
                        onClick={() => {
                          handleBeli(product.harga);
                        }}
                      >
                        Beli Sekarang
                      </Button>

                      <Button
                        variant="info"
                        className="ms-2 card-button"
                        onClick={() => {
                          handleWishlist(product);
                        }}
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
          )
        ) : (
          <p>Tidak ada produk</p>
        )}
      </Row>
    </>
  );
  // } else {
  //   <p className="text-center">kembali ke halaman login</p>;
  // }
}

export default ProductComponent;
