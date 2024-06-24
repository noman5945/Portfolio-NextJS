import React from "react";
import { BentoGrid, BentoGridItem } from "./UI/BentoGrid";

const Grid = () => {
  const gridItems = [
    {
      id: "1",
      title: "Title1",
      description: "1",
      header: "Header",
      icon: <></>,
    },
  ];
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => {
          return (
            <BentoGridItem
              key={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
