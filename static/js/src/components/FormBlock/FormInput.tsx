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
    return (
      <div className={`md:col-span-${cols}`}>
        <label htmlFor={name}>{label}</label>
        <input
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          {...field}
          {...props}
        />
        {meta.error && meta.touched && <div>{meta.error}</div>}
      </div>
    );
  },
);

export default FormInput;
