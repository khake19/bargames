import React from 'react';
import Select from 'react-select';
import { useFetch } from '../../api/fetcher.js';
import FilterStyle from './Filter.module.css';
import useFiltersStore from '../../stores/filters'

const platformOptions = [
  { value: 'all', label: 'All' },
  { value: 'pc', label: 'PC' },
  { value: 'browser', label: 'Browser' }
];

const sortByOptions = [
  { value: 'release-date', label: 'Release Date' },
  { value: 'alphabetical', label: 'Alphabetical' },
  { value: 'relevance', label: 'Relevance' }
];

const Filter = () => {
  const addPlatform = useFiltersStore((state) => state.addPlatform)
  const addSortBy = useFiltersStore((state) => state.addSortBy)
  const addCategory = useFiltersStore((state) => state.addCategory)

  const { data: categories } = useFetch('/api/categories')
  const categoryOptions = categories?.reduce((acc, category) => acc.concat({value: category, label: category}), [])

  return <div className={FilterStyle.container}>
      <div className={FilterStyle.left}>
        <label className={FilterStyle.label}>Filter by Platform</label>
        <Select
          className={FilterStyle.inputField}
          defaultValue={platformOptions[0]}
          onChange={(platform) => addPlatform(platform.value)}
          options={platformOptions}
        />
      </div>
      <div className={FilterStyle.middle}>
        <label className={FilterStyle.label}>Filter by Category</label>
        <Select
          isMulti
          className={FilterStyle.inputField}
          onChange={(categories) => addCategory(categories.map(category => category.value))}
          options={categoryOptions}
        />
      </div>
      <div className={FilterStyle.right}>
        <label className={FilterStyle.label}>Sort By</label>
        <Select
          className={FilterStyle.inputField}
          defaultValue={sortByOptions[0]}
          onChange={(sortBy) => addSortBy(sortBy.value)}
          options={sortByOptions}
        />
      </div>
  </div>
}

export default Filter
