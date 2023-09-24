import React, { useState } from "react";

function Tab({ label, children }) {
  return <div>{children}</div>;
}

function TabList({ children }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <ul>
        {React.Children.map(children, (child, index) => (
          <li key={index} onClick={() => setActiveTabIndex(index)}>
            {child.props.label}
          </li>
        ))}
      </ul>
      {React.Children.toArray(children)[activeTabIndex]}
    </div>
  );
}

export { Tab, TabList };
