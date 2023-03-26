import React from 'react';
import Select from 'react-select';
import { useFetch } from '../../api/fetcher.js';
import FilterStyle from './Filter.module.css';
import useFiltersStore from '../../stores/filters'

const platformOptions = [
  { value: '', label: 'All' },
  { value: 'pc', label: 'PC' },
  { value: 'browser', label: 'Browser' }
];

const sortByOptions = [
  { value: 'release-date', label: 'Release Date' },
  { value: 'alphabetical', label: 'Alphabetical' },
  { value: 'relevance', label: 'Relevance' }
];

const Filter = () => {
  const {platform, sortBy, categories: persistCategories, addPlatform, addSortBy, addCategory} = useFiltersStore()

  const { data: categories } = useFetch('/api/categories')
  const categoryOptions = categories?.reduce((acc, category) => acc.concat({value: category, label: category}), [])

  return <form className={FilterStyle.container} role="filter-form">
      <div className={FilterStyle.left}>
        <label htmlFor="platform" className={FilterStyle.label}>
          Filter by Platform
        </label>
        <Select
          name="platform"
          inputId="platform"
          className={FilterStyle.inputField}
          defaultValue={platformOptions.filter((po) => po.value === platform)}
          onChange={(platform) => addPlatform(platform.value)}
          options={platformOptions}
        />
      </div>
      <div className={FilterStyle.middle}>
        <label htmlFor="categories" className={FilterStyle.label}>Filter by Category</label>
        <Select
          name="categories"
          inputId="categories"
          isMulti
          defaultValue={persistCategories.map(category => ({value: category, label: category}))}
          className={FilterStyle.inputField}
          onChange={(categories) => addCategory(categories.map(category => category.value))}
          options={categoryOptions}
        />
      </div>
      <div className={FilterStyle.right}>
        <label htmlFor="sortBy" className={FilterStyle.label}>Sort By</label>
        <Select
          name="sortBy"
          inputId="sortBy"
          className={FilterStyle.inputField}
          defaultValue={sortByOptions.filter((sbo) => sbo.value === sortBy)}
          onChange={(sortBy) => addSortBy(sortBy.value)}
          options={sortByOptions}
        />
      </div>
    </form>
}

export default Filter
