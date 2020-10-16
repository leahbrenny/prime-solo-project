const plant = (state = [], action) => {
    switch (action.type) {
        case "SET_PLANTS":
          return action.payload;
        default:
          return state;
      }
  };
  
  export default plant;