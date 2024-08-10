// src/cartSlice.js

const initialState = {
  items: [],
};

const cartSlice = (state = initialState, action) => {
  switch (action.type) {
      case 'AddItem': {
          const newItem = action.payload;

          // Check if the item already exists in the cart
          const existingItemIndex = state.items.findIndex(
              item => item.name === newItem.name
          );

          if (existingItemIndex !== -1) {
              // Create a new array with the updated item
              const updatedItems = state.items.map((item, index) => 
                  index === existingItemIndex 
                  ? { ...item, quantity: item.quantity + 1 } 
                  : item
              );

              return { ...state, items: updatedItems };
          } else {
              return { ...state, items: [...state.items, { ...newItem, quantity: 1 }] };
          }
      }

      case 'RemoveItem': {
          const itemNameToRemove = action.payload.name;
          return {
              ...state,
              items: state.items.filter(item => item.name !== itemNameToRemove),
          };
      }

      case 'UpdateItem': {
          const updatedItem = action.payload;

          const updatedItems = state.items.map(item =>
              item.name === updatedItem.name
                  ? { ...item, ...updatedItem }
                  : item
          );

          return { ...state, items: updatedItems };
      }

      default:
          return state;
  }
};

export default cartSlice;
