import { ADD_NOTE } from "../constants";

export const addNote = (note) => {
  return { type: ADD_NOTE, payload: note };
};
