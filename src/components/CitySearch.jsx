// CitySearch.jsx
import React, { useState } from 'react';

const CitySearch = () => {
    const [search, setSearch] = useState('');
    const [city, setCity] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api-ninjas.com/api/city?name=${search}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'yBFnjTWVCssZBTm1O3fTwQ==dn4nOjiBqg48a5uJ',
                }
            });

                if (!response.ok) {
                    // if request fails
                    console.error('Problem finding city. Status:', response.status);
                    return;
                }
                //otherwise all good
                const cityData = await response.json();
                setCity(cityData);
            
            } catch (error) {
            // other errors
            console.error('Unexpected error:', error);
            }
        };

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {city.map((city) => (
          <li key={city.id}>
                {city.name}, {city.country}, {city.population}, {city.is_capital}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitySearch;