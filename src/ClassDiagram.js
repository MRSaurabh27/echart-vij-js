// src/ClassDiagram.js
import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const ClassDiagram = () => {
  useEffect(() => {
    // Initialize mermaid after component mounts
    mermaid.initialize({ startOnLoad: true });
  }, []);

  return (
    <div className="mermaid">
      {`
        classDiagram
          class Animal {
            +String name
            +int age
            +void speak()
          }
          class Dog {
            +void bark()
          }
          Animal <|-- Dog
      `}
    </div>
  );
};

export default ClassDiagram;
