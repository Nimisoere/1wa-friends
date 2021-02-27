import { Link } from "react-router-dom";
import { uid } from "uid";
import ecommerceLogisticsImg from "../../assets/images/e-commerce-logistics.svg";
import cooperateCourierImg from "../../assets/images/corporate-courier.svg";
import domesticCourierImg from "../../assets/images/domestic-courier.svg";
import internationalCourierImg from "../../assets/images/international-courier.svg";

export const pages = [
  {
    id: uid(8),
    slug: "ecommerce-logistics-services",
    title: "Ecommerce Logistics",
    description: "A reputation for speed and reliability",
    contentImg: ecommerceLogisticsImg,
    contentNode: (
      <>
        <p className="mb-5">
          As the best delivery company in Nigeria, GIGL Ecommerce logistics
          services is tailored to empower businesses &amp; individuals by
          offering top-notch courier solutions and excellent customer services.
        </p>
        <p className="mb-5">
          If you're an online business, Business to Business (B2B), Business to
          Customer (B2C) or Customer to Customer (C2C) or multichannel retailer,
          we can work in partnership with you to achieve the right delivery
          solutions that will convey positive outcomes to your ecommerce
          business.
        </p>
        <p className="mb-5">
          A successful ecommerce business needs an effective and reliable
          logistics service to support its daily delivery needs.
        </p>
        <Link
          className="mb-5 font-bold text-sm bg-secondary text-white p-3 rounded-xl"
          to={{ pathname: "https://giglogistics.com/deliverypartner" }}
          target="_blank"
        >
          Sign up as a merchant
        </Link>
      </>
    ),
  },
  {
    id: uid(8),
    slug: "cooperate-courier-services",
    title: "Corporate Courier Services",
    description:
      "Dedicated team who are cognizant that our corporate patrons depend on our shipping services",
    contentImg: cooperateCourierImg,
    contentNode: (
      <>
        <p className="mb-5">
          As the best delivery company in Nigeria, GIGL Ecommerce logistics
          services is tailored to empower businesses &amp; individuals by
          offering top-notch courier solutions and excellent customer services.
        </p>
        <p className="mb-5">
          Our services can be booked on demand and can be expedited at the
          highest level with precision, reliability and professionalism.
        </p>
        <p className="mb-5">
          Our experts handle every aspect of your corporate logistics planning
          and you'll receive a fair cost plan that meets your service
          requirements. Our services can assist businesses across multiple
          industries. We have a dedicated team who are cognizant that our
          corporate patrons depend on our shipping services with every pick-up
          and drop off service from the moment they call and thereby assured
          that their same day, freights, or parcels will be delivered on time.
        </p>
      </>
    ),
  },
  {
    id: uid(8),
    slug: "domestic-courier-solutions",
    title: "Domestic Courier Services",
    description:
      "Dedicated team who are cognizant that our corporate patrons depend on our shipping services",
    contentImg: domesticCourierImg,
    contentNode: (
      <>
        <p className="mb-5">
          With a strong logistics presence across Nigeria. We provide multiple
          delivery options when sending parcels. Whether you are sending parcels
          within your city or to a different state, GIG Logistics offers the
          most affordable domestic courier service to virtually every location
          in Nigeria. We have some of the cheapest Same Day Delivery prices
          available online in Nigeria!
        </p>
        <p className="mb-5">
          Your parcel will be picked up from your doorstep, and delivered when
          you choose from a wide selection of our domestic services online or
          when you give a call. Our trusted personnel will find the best
          solution that meets your needs.
        </p>
      </>
    ),
  },
  {
    id: uid(8),
    slug: "overseas-shipping",
    title: "International Courier Services",
    description:
      "Dedicated team who are cognizant that our corporate patrons depend on our shipping services",
    contentImg: internationalCourierImg,
    contentNode: (
      <>
        <p className="mb-5">Ship anything, anywhere, anytime…</p>
        <p className="mb-5">
          Shipping items across countries, whether purchased or produced, can be
          a hassle, with long delivery timelines and shipping restrictions. GIG
          Logistics (GIGL) is however bridging that gap by providing fast,
          seamless, and efficient overseas shipping service from around the
          world to Nigeria and vice versa, be it to or from China, USA, UK,
          Dubai, Australia, etc.
        </p>
        <p className="mb-5">
          Through a robust network, fast-growing global footprint as well as the
          innovative use of technology, GIGL has made it incredibly easy to ship
          or receive items through the GIGGo app from any city in the world.
        </p>
        <Link
          className="mb-5 font-bold text-sm bg-secondary text-white p-3 rounded-xl"
          to={{ pathname: "/contact-us" }}
        >
          Contact Us
        </Link>
      </>
    ),
  },
];
