import React from "react";
import { ServiceCard as IServiceCard } from "../../interfaces";
import styles from "./ServiceCard.module.scss";

interface Props {
  card: IServiceCard;
  index: number;
}

export const ServiceCard: React.FC<Props> = ({ card, index }) => (
    <div
      key={card.id}
      className={`flex mb-8 lg:mb-20 justify-${
        index % 3 === 0
          ? "center lg:end"
          : index % 3 === 2
          ? "center lg:start"
          : "center"
      } flex-wrap ${styles.servicecard}`}
    >
      <div className="rounded-xl w-full sm:w-11/12 lg:w-9/12 h-full py-6 px-4 text-center shadow-lg bg-white">
        <h4 className="mb-5 text-lg font-semibold ">{card.title}</h4>
        <p className="text-xs">{card.description}</p>
      </div>
    </div>
  );
