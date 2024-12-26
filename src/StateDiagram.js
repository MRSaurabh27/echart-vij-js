// src/StateDiagram.js
import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const StateDiagram = () => {
  const code = `
    stateDiagram-v2
      [*] --> Green
      Green --> Yellow : Switch to Yellow
      Yellow --> Red : Switch to Red
      Red --> Green : Switch to Green
  `;

  useEffect(() => {
    // Initialize mermaid after component mounts
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded(); // Make sure the diagram is rendered after the component mounts
  }, []);

  return (
    <div className="mermaid">
      {code}
    </div>
  );
};

export default StateDiagram;

