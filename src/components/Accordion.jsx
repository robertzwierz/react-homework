import React, { useState } from "react";

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2 onClick={toggleAccordion}>{title}</h2>
      {isOpen && <div>{content}</div>}
    </div>
  );
}

function Accordion({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
}

export default Accordion;
