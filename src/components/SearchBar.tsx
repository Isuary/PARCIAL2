// src/components/SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  fetchData: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ fetchData }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={fetchData} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Consultar
      </button>
    </div>
  );
};

export default SearchBar;
