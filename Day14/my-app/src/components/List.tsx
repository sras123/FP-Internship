import React, { useState, useEffect } from "react";

export default function List({ getItems }: { getItems: () => number[] }) {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);
  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
}
