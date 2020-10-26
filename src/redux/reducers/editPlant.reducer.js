const editPlant = (state = {}, action) => {
    switch (action.type) {
        case "SET_EDIT_PLANT":
          return action.payload;
        default:
          return state;
      }
  };
  
  export default editPlant;