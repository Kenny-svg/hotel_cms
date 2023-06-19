import { createSlice } from '@reduxjs/toolkit';
import data from '../../public/data/data.json';

const initialState = {
  isWishlist: false,
  hotels: data,
  wishlistItems: [],
  selectedValues: {
    selectedDate: null,
    selectedDateTwo: null,
    selectedRoomNo: '',
    selectedPerson: '',
    selectedRoom: '',
  },
  selectedItemId: null,
  isAdded: false

};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      if (newItem && newItem.id) {
        const existingIndex = state.wishlistItems.findIndex(
          (item) => item.id === newItem.id
        );
        state.isAdded = false
        
        if (existingIndex === -1) {
          state.wishlistItems = [...state.wishlistItems, newItem]
          state.selectedItemId = newItem
          state.isAdded = true
        }
      }

    },
    viewDetails: (state, action) => {
      const newItemId = action.payload;
      if (newItemId && newItemId.id) {
        const existingIndex = state.wishlistItems.findIndex(
          (item) => item.id === newItemId.id
        );
        if (existingIndex === -1) {
          state.wishlistItems = newItemId
        }
      }
    },

    removeFromWIshlist: (state, action) => {
      const itemId = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== itemId
      );
      if (state.selectedItemId === itemId) {
        state.selectedItemId = null;
      }
    },
    selectDate: (state, action) => {
      state.selectedValues.selectedDate = action.payload;
    },

    selectPerson: (state, action) => {
      state.selectedValues.selectedPerson = action.payload;
    },

    selectRoom: (state, action) => {
      state.selectedValues.selectedRoom = action.payload;
    },
    selectDateTwo: (state,action) => {
      state.selectedValues.selectedDateTwo = action.payload
    },
    selectRoomNo: (state, action) => {
      state.selectedValues.selectedRoomNo = action.payload
    }

  },
});

export const { addToWishlist, removeFromWIshlist, viewDetails, selectDate, selectPerson, selectRoom, selectDateTwo, selectRoomNo } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
