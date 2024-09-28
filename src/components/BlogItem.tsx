// src/components/BlogItem.tsx
import React from 'react';

interface Blog {
  id: number;
  title: string;
  author: string;
  category: string;
}

interface BlogItemProps {
  blog: Blog;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px',
      borderBottom: '1px solid #ccc',
    }}>
      <div>{blog.id}</div>
      <div>{blog.title}</div>
      <div>{blog.author}</div>
      <div>{blog.category}</div>
    </div>
  );
};

export default BlogItem;
