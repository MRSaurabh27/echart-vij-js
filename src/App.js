import React from 'react';
import Map from './Map'; // Import the Map component
import Viz from './viz'; // Import the Viz component

const App = () => {
  return (
    <div>
      <Map /> {/* Render the Map component */}
      <Viz /> {/* Render the Viz component below */}
    </div>
  );
};

export default App;
