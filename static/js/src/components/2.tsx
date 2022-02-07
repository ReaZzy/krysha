import React from 'react';
import { Link } from 'react-router-dom';

const App2: React.FC = () => {
  return (
    <div className="relative bg-white">
      Hello World2 <Link to={'/1'}>1</Link>
    </div>
  );
};

export default App2;
