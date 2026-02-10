import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

type Person = {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
};

  const fetchPerson = async (id: string): Promise<Person> => {
    const response = await axios.get<Person>(`https://swapi.dev/api/people/${id}`);
    return response.data;
  };

export default function ReactQueryTest() {
const [characterId, setCharacterId] = useState("");

  const { data, error, isLoading, isError, isFetching, isStale, isPlaceholderData } = useQuery({
    queryKey: ['person', characterId],
    queryFn: () => fetchPerson(characterId),
    enabled: characterId !== '',
    staleTime: 30_000, // 30 seconds
    gcTime: 60_000, // 1 minute
    placeholderData: (prev) => prev, // Use previous data as placeholder
})

  const handleSearch = (formData: FormData) => {
    const id = formData.get('id') as string;
    setCharacterId(id);
  }

  return (
    <>
      <form action={handleSearch}>
        <input type="text" name="id" placeholder="Ender Character Id" />
        <button type="submit">Search</button>
      </form>
      <div>
        <div>isFetching: {String(isFetching)}</div>
        <div>isStale: {String(isStale)}</div>
        <div>isPlaceholderData: { String(isPlaceholderData)}</div>
      </div>

      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {(error as Error).message}</div>}
      {data && <pre>{ JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}
