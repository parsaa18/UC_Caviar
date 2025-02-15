import { create } from "zustand";
interface ScrollState {
  productLeft: number;
  setproductLeft: (productLeft: number) => void;
  blogLeft: number;
  setblogLeft: (blogLeft: number) => void;
}

const useScrollStore = create<ScrollState>((set) => ({
  productLeft: 0,
  setproductLeft: (newproductLeft) =>
    set(() => ({ productLeft: newproductLeft })),
  blogLeft: 0,
  setblogLeft: (newblogLeft) => set(() => ({ blogLeft: newblogLeft })),
}));

export default useScrollStore;
