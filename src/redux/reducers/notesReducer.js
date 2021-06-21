import { ADD_NOTE, DELETE_NOTE } from "../constants";

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case DELETE_NOTE:
      return state;
    default:
      return state;
  }
};

export default noteReducer;

// return Object.assign({}, state, {smurfs: [...state.smurfs, action.payload]});
