let initialState = {
  getProducts: false,
  errorProducts: false,
  addWishlist: false,
  setWishlist: false,
  errorPostWishlist: false,
  getWishlist: false,
  errorWishlist: false,
  getCategories: false,
  errorGetCategories: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        getProducts: action.payload.data,
        errorProducts: action.payload.errorMessage,
      };
    case 'GET_CATEGORIES':
      return {
        ...state,
        getCategories: action.payload.data,
        errorGetCategories: action.payload.errorMessage,
      };
    case 'ADD_WISHLIST':
      return {
        ...state,
        addWishlist: action.payload.data,
        errorPostWishlist: action.payload.errorMessage,
      };
    case 'GET_WISHLIST':
      return {
        ...state,
        getWishlist: action.payload.data,
        errorWishlist: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export default products;
