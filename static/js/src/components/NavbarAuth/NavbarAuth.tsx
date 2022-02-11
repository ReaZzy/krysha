import React from 'react';

const NavbarAuth: React.FC = () => {
  return (
    <div className="flex items-center md:ml-12">
      <a
        href="/property"
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Рассчитать полис
      </a>
      <a
        href="/sign-in"
        className="ml-8 font-bold inline-flex items-center justify-center px-4 py-2 hover:bg-gray-200 border border-transparent rounded-md"
      >
        Войти
      </a>
    </div>
  );
};

export default NavbarAuth;
