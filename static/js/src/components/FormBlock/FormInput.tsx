import React from 'react';
import { useField } from 'formik';

interface IProps {
  name: string;
  label?: string;
  cols?: number;
  [key: string]: any;
}

const FormInput: React.FC<IProps> = React.memo(
  ({ name, label, cols, ...props }) => {
    const [field, meta] = useField(name);
    const hasError = meta.error && meta.touched;
    return (
      <div className={`md:col-span-${cols}`}>
        <label htmlFor={name}>{label}</label>
        <input
          {...field}
          {...props}
          className={`shadow appearance-none border ${
            hasError ? 'border-red-500' : 'border-gray-300'
          }  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10 mt-1 rounded w-full bg-gray-50`}
        />
        {hasError && <div className="text-red-500 text-xs">{meta.error}</div>}
      </div>
    );
  },
);

export default FormInput;
