// https://api.themoviedb.org/3/search/multi?query=Sabrina

import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { Loading } from './Loading/Loading';
import { Error } from './Error/Error';

export default function Search() {

  // State management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q');

  // useEffect gdje ćemo napraviti API call na https://api.themoviedb.org/3/search/multi?query={searchParams.get('q')}
  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error?.message}/>}

      {!loading && !error && <h1>Search value: {searchParams.get('q')}</h1>}
    </>
  );
}
