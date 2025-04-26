import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      lists: [],
      Add: (todo) =>
        set((state) => {
          const { task, Date: date, time } = todo;
          if (!task || !date || !time) return state;
          const now = moment();
          const target = moment(`${date} ${time}`, "YYYY-MM-DD HH:mm");
          if (!target.isAfter(now)) return state;

          const duration = moment.duration(target.diff(now));
          const days = duration.days();
          const hours = duration.hours();
          const minutes = duration.minutes();
          const seconds = duration.seconds();
          const formatted = `${days}d ${hours}h ${minutes}m ${seconds}s`;

          const updatedTodo = {
            id: uuidv4(),
            ...todo,
            remaining: formatted,
          };

          return {
            lists: [...state.lists, updatedTodo],
          };
        }),

      Delete: (todoId) =>
        set((state) => ({
          lists: state.lists.filter((item) => item.id !== todoId),
        })),

      Edit: (todoId, newProps) =>
        set((state) => ({
          lists: state.lists.map((item) =>
            item.id === todoId ? { ...item, ...newProps } : item
          ),
        })),
    }),
    { name: "Lists" }
  )
);

export default useStore;
