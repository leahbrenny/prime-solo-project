const editRoom = (state = {}, action) => {
    switch (action.type) {
        case "SET_EDIT_ROOM":
          return action.payload;
        default:
          return state;
      }
  };
  
  export default editRoom;