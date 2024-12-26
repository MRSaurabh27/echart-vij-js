import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const FlowChart = () => {
  useEffect(() => {
    // Initialize mermaid after component mounts
    mermaid.initialize({ startOnLoad: true });
  }, []);

  return (
    <div className="mermaid">
      {`
        graph LR
          A[Start] --> B{Is it a React project?}
          B -- Yes --> C[Yes, it is!]
          B -- No --> D[No, it's not!]
          C --> E[Flowchart Complete]
          D --> E
      `}
    </div>
  );
};

export default FlowChart;