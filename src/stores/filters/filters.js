import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useFiltersStore = create(
  persist(devtools((set) => ({
    platform: '',
    addPlatform: (platform) => set({ platform }),
    sortBy: 'release-date',
    addSortBy: (sortBy) => set({ sortBy }),
    categories: [],
    addCategory: (categories) => set({ categories }),
    search: '',
    addSearch: (search) => set({ search })
  })),
    {
      name: 'filter-storage'
    }
  )
)

export default useFiltersStore;
