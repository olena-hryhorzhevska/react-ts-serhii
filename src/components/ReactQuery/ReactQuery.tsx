import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const fetchPerson = async (id: string) => {
  const response = await axios.get(`https://swapi.dev/api/people/${id}`);
  return response.data;
}

export default function ReactQuery() {
  const [characterId, setCharacterId] = useState("");
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['person', characterId],
    queryFn: () => fetchPerson(characterId),
    enabled: characterId !== '',
  })

  const handleSearch = (formData: FormData) => {
    const id = formData.get('id') as string;
    setCharacterId(id);
}

  return (
    <>
      <form action={handleSearch}>
        <input type="text" name="id" placeholder="Enter Character Id" />
        <button type="submit">Search</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {(error as Error).message}</div>}
      {data && <pre>{ JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}