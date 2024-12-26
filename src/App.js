import React from 'react';
import Flowchart from './Flow'; // Import Flowchart component
import PieChart from './PieChart'; // Import PieChart component
import ERDiagram from './ERDiagram'; // Import ER Diagram component
import ClassDiagram from './ClassDiagram'; // Import ClassDiagram component
import StateDiagram from './StateDiagram'; // Import StateDiagram component
import Map from './Map'; // Import the Map component
import Viz from './viz'; // Adjust the case of the file name to match 'viz.js'
import FlowComponent from './FlowComponent'; // Import FlowComponent from the second App.js file
import './App.css'; // Import the CSS for styling

const App = () => {
  return (
    <div className="app-container">
      <h1>React Visualization Components</h1>
      
      {/* First set of components */}
      <div className="box">
        <h2>Flowchart</h2>
        <Flowchart />
      </div>
      <div className="box pie-chart-box">
        <h2>Pie Chart</h2>
        <PieChart />
      </div>
      <div className="box">
        <h2>ER Diagram</h2>
        <ERDiagram />
      </div>
      <div className="box">
        <h2>Class Diagram</h2>
        <ClassDiagram />
      </div>
      <div className="box">
        <h2>State Diagram</h2>
        <StateDiagram />
      </div>
      
      {/* Second set of components */}
      <div className="box">
        <h2>Map</h2>
        <Map /> {/* Render the Map component */}
      </div>
      <div className="box">
        <h2>Viz</h2>
        <Viz /> {/* Render the Viz component below */}
      </div>
      
      {/* Additional FlowComponent section from second App.js */}
      <div className="box">
        <h2>FlowComponent</h2>
        <FlowComponent /> {/* Render FlowComponent from second App.js */}
      </div>
    </div>
  );
};

export default App;
