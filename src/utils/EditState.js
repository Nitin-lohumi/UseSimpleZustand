import { create } from "zustand";
import useStore from "./UseStore";

const useEditStore = create((set) => ({
  isedit: false,
  editList: null,
  toggleEdit: (todoId) => {
    const lists = useStore.getState().lists;
    const selected = lists.find((item) => item.id === todoId); 

    return set((state) => ({
      editList: state.isedit ? null : selected,
      isedit: !state.isedit,
    }));
  },
  clearEdit: () =>
    set({
      isedit: false,
      editList: null,
    }),
}));

export default useEditStore;
