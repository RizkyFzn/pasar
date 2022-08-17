import axios from 'axios';
import swal from 'sweetalert';

// export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_WISHLIST = 'ADD_WISHLIST';
export const GET_WISHLIST = 'GET_WISHLIST';

// export const setUser = (user) => {
//   console.log('user:', user);
//   return (dispatch) => {
//     dispatch({
//       type: SET_USER,
//       payload: {
//         user: user,
//         errorMessage: false,
//       },
//     });
//   };
// };

export const getProducts = () => {
  return (dispatch) => {
    axios
      .get(`https://my-json-server.typicode.com/Rizkyfzn/pasar-api/products/`)
      .then((res) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: {
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const getCategories = () => {
  return (dispatch) => {
    axios
      .get(`https://my-json-server.typicode.com/Rizkyfzn/pasar-api/categories/`)
      .then((res) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: {
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const addWishlist = (data) => {
  return (dispatch) => {
    axios
      .post(`https://my-json-server.typicode.com/Rizkyfzn/pasar-api/wishlist/`, data)
      .then(function (res) {
        dispatch({
          type: ADD_WISHLIST,
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
        swal('Produk disimpan pada keranjang');
      })
      .catch((err) => {
        dispatch({
          type: ADD_WISHLIST,
          payload: {
            data: false,
            errorMessage: err.message,
          },
        });
        swal(`Gagal menambahkan produk ke keranjang, ${err.message}`);
      });
  };
};

export const getWishlist = () => {
  return (dispatch) => {
    axios
      .get(`https://my-json-server.typicode.com/Rizkyfzn/pasar-api/wishlist/`)
      .then((res) => {
        dispatch({
          type: GET_WISHLIST,
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_WISHLIST,
          payload: {
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const deleteWishlist = (id) => {
  return () => {
    axios
      .delete('https://my-json-server.typicode.com/Rizkyfzn/pasar-api/wishlist/' + id)
      .then(function (response) {})
      .catch(function (error) {});
  };
};

export const deleteDataUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: GET_WISHLIST,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
    // dispatch({
    //   type: SET_USER,
    //   payload: {
    //     data: false,
    //     errorMessage: false,
    //   },
    // });
  };
};
