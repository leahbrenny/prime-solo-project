const room = (state = [], action) => {
    switch (action.type) {
        case "SET_ROOMS":
          return action.payload;
        case "ADD_ROOM":
          return action.payload;
        default:
          return state;
      }
  };
  
  export default room;