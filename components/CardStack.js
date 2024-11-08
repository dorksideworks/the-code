'use client'

import { motion } from "framer-motion";
import move from "lodash-move";
import { useState } from "react";
const CARD_SOURCE = ["./cards/bank-nurturing.png", "./cards/bank-action.png", "./cards/bank-knowledge.png", "./cards/bank-blueprint.png"]
const CARD_OFFSET = 15;
const SCALE_FACTOR = .07;

export default function CardStack() {
  const [cards, setCards] = useState(CARD_SOURCE);

  const moveToEnd = from => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((image, index) => {
          const canDrag = index === 0;

          return (
            <motion.img
              key={image}
              src={image}
              style={{
                ...cardStyle,
                cursor: canDrag ? "grab" : "auto"
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: CARD_SOURCE.length - index,
                y: "0"
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0
              }}
              onDragEnd={() => moveToEnd(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};
const wrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const cardWrapStyle = {
  position: "relative",
  width: "500px",
  height: "300px"
};

const cardStyle = {
  position: "absolute",
  width: "500px",
  height: "300px",
  borderRadius: "8px",
  transformOrigin: "top center"
};

