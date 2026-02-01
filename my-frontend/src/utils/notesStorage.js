
const KEY = "notes";

export const getNotes = () =>
  JSON.parse(localStorage.getItem(KEY)) || [];

export const saveNotes = (notes) =>
  localStorage.setItem(KEY, JSON.stringify(notes));
