export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

export const incrementCounter = (data) => ({
  type: ActionTypes.INCREMENT,
  payload: data,
});

export const decrementCounter = (data) => ({
  type: ActionTypes.DECREMENT,
  payload: data,
});
