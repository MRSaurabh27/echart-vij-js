import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';

const Graph = () => {
  const graphContainer = useRef(null);

  useEffect(() => {
    // Data for the graph
    const nodes = [
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' },
    ];

    const edges = [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ];

    const data = { nodes, edges };

    // Graph options
    const options = {
      nodes: {
        shape: 'dot',
        size: 16,
        font: {
          size: 14,
        },
      },
      edges: {
        width: 2,
        color: '#848484',
      },
      physics: {
        enabled: true,
      },
    };

    // Initialize the Vis.js network
    const network = new Network(graphContainer.current, data, options);

    return () => {
      network.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div
      ref={graphContainer}
      style={{ width: '100%', height: '500px', border: '1px solid black' }}
    ></div>
  );
};

export default Graph;
