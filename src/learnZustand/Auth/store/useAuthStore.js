import { create } from "zustand";
const useAuthStore = create((set) => ({
  username:"rafif",
  role: "user",
  count: 3,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
export default useAuthStore;
//! Zustand adalah library untuk membuat dan mengelola global state
//! create adalah fungsi dari zustand untuk membuat store
//!set adalah fungsi yangf disediakan oleh zustand untuk mengubah state