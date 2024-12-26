import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const ERDiagram = () => {
  useEffect(() => {
    // Initialize mermaid after the component mounts
    mermaid.initialize({ startOnLoad: true });
  }, []);

  return (
    <div className="mermaid">
      {`
        erDiagram
          CUSTOMER {
            string name
            string email
            string phone
          }
          ORDER {
            int orderId
            date orderDate
            float amount
          }
          PRODUCT {
            string productId
            string name
            float price
          }
          CUSTOMER ||--o{ ORDER : places
          ORDER ||--o{ PRODUCT : contains
      `}
    </div>
  );
};

export default ERDiagram;
