import React from 'react';
import { Link } from 'react-router-dom';

const App1: React.FC = () => {
  return (
    <div className="relative bg-white">
      Hello World1 <Link to={'/2'}>2</Link>
    </div>
  );
};

export default App1;
