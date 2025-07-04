import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, action }) => {
  return (
    <div className="flex justify-between items-start mb-4">
      <div>
        <h1 className="text-2xl font-bold text-white/90">{title}</h1>
        {description && <p className="text-white/60 mt-1">{description}</p>}
      </div>
      {action}
    </div>
  );
};