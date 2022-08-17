let initialState = {
  user: false,
  // getUsers: false,
  // errorUsers: false,
  // getUserDetail: false,
  // errorUserDetail: false,
  // getResponDataUser: false,
  // errorResponDataUser: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
export default users;
