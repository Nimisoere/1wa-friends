import React from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import styles from "./Carousel.module.scss";

interface Props {
  slides: React.ReactElement[];
  cardClassName?: string;
  autoplay?: boolean;
  timing?: number;
}

interface Indexes {
  previousIndex: number;
  currentIndex: number;
  nextIndex: number;
}

const determineClasses = (indexes: Indexes, cardIndex: number) => {
  if (indexes.currentIndex === cardIndex) {
    return styles.active;
  } if (indexes.nextIndex === cardIndex) {
    return styles.next;
  } if (indexes.previousIndex === cardIndex) {
    return styles.prev;
  }
  return styles.inactive;
};

const Carousel: React.FC<Props> = ({
  slides,
  autoplay,
  timing,
  cardClassName,
}) => {
  const [indexes, setIndexes] = React.useState<Indexes>({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = React.useCallback(() => {
    if (indexes.currentIndex >= slides.length - 1) {
      setIndexes({
        previousIndex: slides.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === slides.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex, slides.length]);

  const handleCardTransitionBack = React.useCallback(() => {
    if (indexes.currentIndex <= 0) {
      setIndexes({
        previousIndex: slides.length - 2,
        currentIndex: slides.length - 1,
        nextIndex: 0,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex:
          prevState.currentIndex - 2 < 0
            ? slides.length - 1
            : prevState.currentIndex - 2,
        currentIndex: prevState.currentIndex - 1,
        nextIndex: prevState.currentIndex,
      }));
    }
  }, [indexes.currentIndex, slides.length]);

  React.useEffect(() => {
    if (autoplay) {
      const transitionInterval = setInterval(() => {
        handleCardTransition();
      }, timing || 4000);
      return () => clearInterval(transitionInterval);
    }
  }, [autoplay, handleCardTransition, indexes, timing]);

  return (
    <>
      <div className={styles.cardcarousel}>
        {slides.map((slide, index) => (
          <div
            key={slide as any} // Important for animation to work
            className={`${styles.card} ${determineClasses(
              indexes,
              index
            )} ${cardClassName}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="flex gap-2 my-20 justify-end w-full">
        <button onClick={handleCardTransitionBack}>
          <HiOutlineArrowNarrowLeft className=" text-3xl opacity-50 hover:opacity-100 hover:scale-150 transform transition-transform" />
        </button>{" "}
        <button onClick={handleCardTransition}>
          <HiOutlineArrowNarrowRight className="text-3xl opacity-50 hover:opacity-100 hover:scale-150 transform transition-transform" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
