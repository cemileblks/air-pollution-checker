import React, { useState } from 'react';

function BoringSearchBox({ onCitySearch }) {
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    onCitySearch(cityName);
  };

  return (
    <div>
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default BoringSearchBox;