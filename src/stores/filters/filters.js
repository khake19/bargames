import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useFiltersStore = create(
  devtools((set) => ({
    platform: '',
    addPlatform: (platform) => set({ platform }),
    sortBy: 'release-date',
    addSortBy: (sortBy) => set({ sortBy }),
    categories: [],
    addCategory: (categories) => set({ categories })
  }))
)

export default useFiltersStore;