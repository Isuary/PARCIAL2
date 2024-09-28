// src/App.tsx
import React, { useState } from 'react';
import BlogList from './components/BlogList';
import SearchBar from './components/SearchBar';
import './index.css';

interface Blog {
  id: number;
  title: string;
  author: string;
  category: string;
}

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Gestión de Blogs</h1>
      <SearchBar fetchData={fetchData} />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default App;
