export default (state = null, action) => {
  if (action.type === 'select_library') {
    return action.payload;
  }

  return state;
};
