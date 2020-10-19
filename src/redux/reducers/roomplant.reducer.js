const roomplant = (state = [], action) => {
    switch (action.type) {
        case "SET_ROOMPLANTS":
          return action.payload;
        default:
          return state;
      }
  };
  
  export default roomplant;