export const setMessage = (message) => {
  return dispatch => {
    dispatch( {
      type: "SET_MESSAGE",
      payload: { message}
    });
  };
};
