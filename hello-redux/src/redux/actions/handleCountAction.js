export const increment = () => ({
  type: "INCREMENT",
  payload: null,
});

export const decrement = () => ({
  type: "DECREMENT",
  payload: null,
});

export const addByStep = (val) => ({
  type: "ADDBYSTEP",
  payload: val,
});
