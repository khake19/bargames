import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json());

const swrConfig = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
  errorRetryCount: 3,
  errorRetryInterval: 5000,
};

export const useFetch = (url) => {
  const { data, error, isValidating } = useSWR(url, fetcher, swrConfig);
  return {
    data,
    error,
    isLoading: !error && !data && isValidating,
  };
}
