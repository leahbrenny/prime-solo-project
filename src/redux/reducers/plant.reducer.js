const plant = (state = [], action) => {
    switch (action.type) {
        case "SET_PLANTS":
          return action.payload;
          case "ADD_PLANT":
            return state;
            case "DELETE_PLANT":
              return state;
              case "WATER_PLANT":
                return state;
        default:
          return state;
      }
  };
  
  export default plant;