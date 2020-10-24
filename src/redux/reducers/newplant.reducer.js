const newplant = (state = {}, action) => {
    switch (action.type){
        case "SET_NEW_PLANT":
            return action.payload;
            default:
                return state;
    }
}

export default newplant;