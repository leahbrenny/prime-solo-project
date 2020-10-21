const room = (state = [], action) => {
    switch (action.type) {
        case "SET_ROOMS":
          return action.payload;
        case "ADD_ROOM":
          return state;
        case "DELETE_ROOM":
          return state;
        default:
          return state;
      }
  };
  
  export default room;