
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
}

const BlogCard = ({ id, title, summary, image, date }: BlogCardProps) => {
  return (
    <Link to={`/blogs/${id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden card-shadow animate-hover">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-5">
          <p className="text-gray-500 text-sm mb-2">{date}</p>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 line-clamp-3 mb-4">{summary}</p>
          <div className="text-travel-blue font-medium">Read More →</div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
