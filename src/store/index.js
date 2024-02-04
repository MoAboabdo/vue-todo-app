import { createStore } from "vuex";
import todos from "./modules/todos";

// Load Vuex

// Create store
export default createStore({
  modules: {
    todos,
  },
});
