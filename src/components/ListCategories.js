import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

function ListCategories() {
  const kategori = useSelector((state) => state.products.getCategories);

  return (
    <>
      <Col mt="2" className="text-center">
        <hr />
        <div className="kategori mb-2">
          <Row className="list-kategori">
            <Col className="list-kategori">
              <Link to={'/home'} className="p-3 kategori-item">
                All Items
              </Link>
              {kategori ? (
                kategori.map((data) => {
                  return (
                    <Link to={`/home/${data.nama}`} key={data.id} className="p-3 kategori-item">
                      {data.nama}
                    </Link>
                  );
                })
              ) : (
                <p>Kategori Kosong</p>
              )}
              <hr className="mt-3" />
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

export default ListCategories;
