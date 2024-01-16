import { create } from 'zustand'

// 创建store
export const useDemoStore = create<DemoStore>((set) => ({
  bears: 0,
  testNum: 2,
  increasePopulation: () =>
    set((state) => ({ bears: state.bears + 1, testNum: state.testNum + 1 })),
  deductNum: () => set((state) => ({ bears: state.bears - 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

interface DemoStore {
  /** 熊猫 */
  bears: number
  testNum: number
  increasePopulation: () => any
  deductNum: () => any
  removeAllBears: () => any
}
