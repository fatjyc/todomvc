import { globalReducer } from "react-hook-utils";
import { deleteTodo, updateTodo, updateTodoDone } from "./action";

export const reducer = {
  init: (state, todos) => state.concat(todos),
  // Delete a todo by id
  deleteTodo: (state, id) => {
    deleteTodo(id);
    return state.filter((i) => i.id !== id);
  },

  // Create a new item
  addTodo: (state, todo) => [todo, ...state],

  // Set the done state of an item
  setDone: (state, id, done) => {
    updateTodoDone(id);
    return state.map((i) =>
      i.id === id
        ? {
            ...i,
            done,
          }
        : i
    );
  },

  // Set the label of an item
  setLabel: (state, id, label) => {
    return state.map((i) =>
      i.id === id
        ? {
            ...i,
            label,
          }
        : i
    );
  },

  // Set the label of an item
  updateLabel: (state, id, label) => {
    updateTodo(label, id);
    return state.map((i) =>
      i.id === id
        ? {
            ...i,
            label,
          }
        : i
    );
  },

  // Toggle an item done
  toggleDone: (state, id) => {
    updateTodoDone(id);
    return state.map((i) =>
      i.id === id
        ? {
            ...i,
            done: !i.done,
          }
        : i
    );
  },
};

const useTodos = globalReducer([], reducer);

export default useTodos;
