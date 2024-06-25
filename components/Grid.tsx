import React from "react";
import { BentoGrid, BentoGridItem } from "./UI/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => {
          return (
            <BentoGridItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              titleClassName={item.titleClassName}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
