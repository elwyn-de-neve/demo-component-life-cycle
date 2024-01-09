import { useEffect, useState } from "react";
import axios from "axios";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchCountries() {
      try {
        setIsLoading(true);
        let endpoint = "https://restcountries.com/v3.1/all";
        if (searchQuery) {
          endpoint = `https://restcountries.com/v3.1/name/${searchQuery}`;
        }
        const response = await axios.get(endpoint, {
          signal: abortController.signal,
        });
        console.log(response.data);
        setCountries(response.data);
      } catch (error) {
        setError("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCountries();

    return () => {
      console.log("Clean up");
      abortController.abort();
    };
  }, [searchQuery]);

  return (
    <>
      <h1>Countries</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search countries"
      />
      {/*<button type="button" onClick={fetchCountries}>*/}
      {/*  Fetch Countries*/}
      {/*</button>*/}
      <ol>
        {countries?.map((country) => (
          <li key={country.name.common}>
            {country.name.common} - {country.population}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Countries;
