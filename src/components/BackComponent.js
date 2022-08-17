import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BackComponent() {
  const navigate = useNavigate();
  // useEffect (() => {
  //   navigate(-1);
  // })
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <Button
        style={{ widht: '100%', maxWidth: '13vmax' }}
        variant="outline-dark"
        onClick={() => {
          handleClick();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} /> Kembali
      </Button>
    </>
  );
}

export default BackComponent;
