export default (state={message:""}, action) => {
  switch( action.type){
    case "SET_MESSAGE":
      return { ...state, message: action.payload.message};
    default:
      return state;
  }
};
