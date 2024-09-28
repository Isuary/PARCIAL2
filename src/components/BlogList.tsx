// src/components/BlogList.tsx
import React from 'react';
import BlogItem from './BlogItem';

interface Blog {
  id: number;
  title: string;
  author: string;
  category: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', fontWeight: 'bold' }}>
        <div>Id</div>
        <div>Título</div>
        <div>Autor</div>
        <div>Categoría</div>
      </div>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
