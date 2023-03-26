const buildParams = (platform, sortBy, categories) => {
  const queryParts = [];

  if (platform) {
    queryParts.push(`platform=${platform}`);
  }

  if (sortBy) {
    queryParts.push(`sort-by=${sortBy}`);
  }

  if (categories.length) {
    categories.forEach(cat => {
      queryParts.push(`category=${cat}`);
    });
  }

  return queryParts.length ? `?${queryParts.join('&')}` : '';
}

export default buildParams;
