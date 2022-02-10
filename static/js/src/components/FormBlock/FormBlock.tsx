import React from 'react';

interface IProps {
  children: React.ReactChild;
  title: string;
  description?: string;
}

const FormBlock: React.FC<IProps> = React.memo(
  ({ children, title, description }) => (
    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
      <div className="text-gray-600 max-w-sm">
        <p className="font-medium text-lg">{title}</p>
        {description && <p>{description}</p>}
      </div>

      <div className="lg:col-span-2">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
          {children}
        </div>
      </div>
    </div>
  ),
);

export default FormBlock;
