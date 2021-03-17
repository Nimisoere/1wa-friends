import React from "react";
import Carousel from "../../common/Carousel/Carousel";
import { testimonials } from "./testimonials";
import styles from "./TrustedBy.module.scss";

interface Props {}

const TrustedBy: React.FC<Props> = (props) => {
  return (
    <div>
      <h4 className="text-center font-sans mb-3 font-black text-3xl max-w-xs mx-auto">
        Trusted by our Customers &amp; Partners
      </h4>
      <div className={styles.trustedBy}>
        <div className="w-full my-10 max-w-xl mx-auto">
          <Carousel
            autoplay
            cardClassName={styles.cardQuote}
            slides={testimonials.map((testimonial) => (
              <div className="" key={testimonial.id}>
                {testimonial.text}
              </div>
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
