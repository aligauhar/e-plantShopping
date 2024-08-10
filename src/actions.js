export const addItem = (product) => ({
  type: 'AddItem',
  payload: product,
});

export const removeItem = (product) => ({
  type: 'RemoveItem',
  payload: product,
});

export const updateItem = (product) => ({
  type: 'UpdateItem',
  payload: product,
});
