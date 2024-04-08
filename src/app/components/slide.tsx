"use client";
import { MotionValue, useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { IconType } from "react-icons";
import {
  FiArrowRight,
  FiCheck,
  FiCheckSquare,
  FiSunrise,
  FiUsers,
} from "react-icons/fi";

const StickyCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className="relative">
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
      <div className="h-screen bg-black" />
    </>
  );
};

interface CardProps {
  position: number;
  card: CardType;
  scrollYProgress: MotionValue;
}

const Card = ({ position, card, scrollYProgress }: CardProps) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: isOddCard ? "black" : "white",
        color: isOddCard ? "white" : "black",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
    >
      <card.Icon className="mb-4 text-4xl" />
      <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">
        {card.title}
      </h3>
      <p className="mb-8 max-w-lg text-center text-sm md:text-base">
        {card.description}
      </p>
      <a
        href={card.routeTo}
        className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
          card.ctaClasses
        } ${
          isOddCard
            ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
            : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
        }`}
      >
        <span>Learn more</span>
        <FiArrowRight />
      </a>
    </motion.div>
  );
};

const CARD_HEIGHT = 500;

type CardType = {
  id: number;
  Icon: IconType;
  title: string;
  description: string;
  ctaClasses: string;
  routeTo: string;
};

const CARDS: CardType[] = [
  {
    id: 1,
    Icon: FiSunrise,
    title: "Exceptional Quality",
    description:
      "Kathendu Coffee Estate prides itself on producing specialty coffee of exceptionally high quality, scoring 83 and 85 points. This superior quality is achieved through meticulous cultivation practices, selective harvesting, and expert processing techniques. Customers value the rich flavor profiles, distinct aromas, and smooth textures that characterize Kathendu's coffee beans.",
    ctaClasses: "bg-violet-300",
    routeTo: "../contact",
  },
  {
    id: 2,
    Icon: FiCheck,
    title: "Sustainable Farming Practices",
    description:
      "Customers are increasingly conscious of the environmental and social impact of their purchasing decisions. Kathendu Coffee Estate stands out for its commitment to sustainable farming practices. By prioritizing environmental conservation, minimizing chemical inputs, and supporting local communities, Kathendu not only produces great coffee but also contributes positively to the ecosystem and society.",
    ctaClasses: "bg-pink-300",
    routeTo: "../contact",
  },
  {
    id: 3,
    Icon: FiCheckSquare,
    title: "Direct Trade and Transparency",
    description:
      "Kathendu Coffee Estate fosters direct relationships with its customers, promoting transparency and traceability throughout the supply chain. By bypassing intermediaries and engaging in direct trade, Kathendu ensures that customers receive freshly harvested beans of known origin and quality. This direct relationship fosters trust and allows customers to support small-scale producers directly.",
    ctaClasses: "bg-red-300",
    routeTo: "../contact",
  },
  {
    id: 4,
    Icon: FiUsers,
    title: "Ethical and Fair Trade Practices",
    description:
      "In addition to sustainability, Kathendu Coffee Estate prioritizes ethical and fair trade practices. Fair treatment of workers, fair wages, and community development initiatives are integral to Kathendu's operations. Customers who prioritize ethical consumption are drawn to Kathendu's commitment to fairness and social responsibility, knowing that their purchase contributes to positive change in coffee-growing communities.",
    ctaClasses: "bg-amber-300",
    routeTo: "../contact",
  },
];

export default StickyCards;
