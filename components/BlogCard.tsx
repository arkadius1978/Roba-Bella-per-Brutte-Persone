
import React from 'react';
import { BlogPost } from '../types';
import { Clock, User } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  if (!post) return null;
  
  return (
    <div 
      onClick={() => onClick(post)}
      className="group bg-white rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-pink-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full select-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(post);
        }
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-pink-600 shadow-sm">
            {post.date}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-cartoony font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors leading-tight">
            {post.title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
            {post.excerpt}
        </p>
        
        <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1">
                <User size={14} /> {post.author}
            </div>
            <div className="flex items-center gap-1">
                <Clock size={14} /> {post.readTime}
            </div>
        </div>
      </div>
    </div>
  );
};
