import React from "react";
import {
  ServiceCard as IServiceCard,
  ServicePageDataCardList,
} from "../../interfaces";
import { ServiceCard } from "./ServiceCard";

interface Props {
  cardList: ServicePageDataCardList;
}

export const ServiceCardGroup: React.FC<Props> = ({ cardList }) => (
    <div className="w-full py-8 lg:py-24">
      <h4 className="font-bold text-center mb-10 text-3xl">{cardList.title}</h4>
      <div className="w-full flex flex-wrap justify-center">
        {cardList.cards?.map((card: IServiceCard, index: number) => (
          <ServiceCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </div>
  );
