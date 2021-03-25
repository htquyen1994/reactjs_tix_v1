const initialState = {
    movieList: [],
  };
  
  const movieReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'TEST': {
        return { ...state};
      }
      
      default:
        return state;
    }
  };
  
  export default movieReducer;