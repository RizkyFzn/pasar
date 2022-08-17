import React from 'react';
import DasboardPembeli from './DashboardPembeli';

function Home() {
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.users.user);
  // console.log('user', user);
  // if (user || !user) {
  return (
    <>
      <DasboardPembeli />
    </>
  );
  // }
  // setTimeout(() => {
  //   navigate('/');
  // }, 1000);
  // return (
  //   <Container className="text-center">
  //     <Spinner animation="border" role="status" />
  //     <p>Login terlebih dahulu</p>
  //   </Container>
  // );
}

export default Home;
