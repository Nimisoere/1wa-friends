import React from 'react';
import { Link } from 'react-router-dom';
import { uid } from 'uid';
import ecommerceLogisticsImg from '../../assets/images/e-commerce-logistics.svg';
import cooperateCourierImg from '../../assets/images/corporate-courier.svg';
import domesticCourierImg from '../../assets/images/domestic-courier.svg';
import internationalCourierImg from '../../assets/images/international-courier.svg';
import { ServicePageData } from '../../interfaces';
import styles from './Service.module.scss';
import { ReactComponent as GroupPeople } from '../../assets/icons/services/group.svg';
import { ReactComponent as Wallet } from '../../assets/icons/services/wallet.svg';
import { ReactComponent as MoneyBag } from '../../assets/icons/services/moneybag.svg';

export const pages: ServicePageData[] = [
  {
    id: uid(8),
    slug: 'ecommerce-logistics-services',
    title: 'Ecommerce Logistics',
    description: 'A reputation for speed and reliability',
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
          className="mb-5 inline-flex font-bold text-sm bg-secondary text-white p-3 rounded-xl"
          to={{ pathname: 'https://gigl-go.com/merchantSignUp' }}
          target="_blank"
        >
          Sign up as a merchant
        </Link>
        <p className="mb-5 tex-sm">
          Already have an account?{' '}
          <Link
            className="font-bold text-sm text-primary"
            to={{ pathname: 'https://gigl-go.com/' }}
            target="_blank"
          >
            Login to your merchant account
          </Link>
        </p>
      </>
    ),
    card_list: {
      title: 'Our Unique Services',
      cards: [
        {
          id: uid(8),
          icon: <GroupPeople />,
          title: '3rd Party Integration',
          description:
            "Your Online store/Website need buyers to be fully satisfied and be loyal customers. The e-commerce 3rd Party Integration resource meets your needs and it's as user-friendly as possible. Thats why you have to integrate your marketplace with us at GIG Logistics. This e-Commerce integration will keep your online platform running at a high level.",
        },
        {
          id: uid(8),
          icon: <Wallet />,
          title: 'Prepaid Services',
          description:
            'On our prepaid plan, you pay for your delivery service to your customer upfront. This Services is a pay as you use service with its related discount',
        },
        {
          id: uid(8),
          icon: <MoneyBag />,
          title: 'Cash on Delivery Services',
          description:
            "Cash on Delivery offers you a convenient payment method with Cash/Card on delivery service, 100% payment collected on behalf of the shipper from the receiver's doorstep or the terminal station and remits directly to your bank account.",
        },
      ],
    },
  },
  {
    id: uid(8),
    slug: 'corporate-courier-services',
    title: 'Corporate Courier Services',
    description:
      'Dedicated team who are cognizant that our corporate patrons depend on our shipping services',
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
    card_list: {
      title: 'How we work',
      cards: [
        {
          id: uid(8),
          icon: <GroupPeople />,
          title: 'Import Services',
          description:
            'With our import services, you can import directly from your international suppliers. Arrange your inbound delivery through the personalized Import Services we provide. GIGL also provides tailor-made packaging services and transport solutions for companies within the technology sector.',
        },
        {
          id: uid(8),
          icon: <Wallet />,
          title: 'Haulage services',
          description:
            'On our prepaid plan, you pay for your delivery service to your customer upfront. This Services We have an extensive fleet of vehicles which enables us to provide a comprehensive range of services to a wide variety of industries. Our main areas of service are agricultural, manufacturing and industrial sectors as well as specialty project work such as transporting pipes and crane work materials. a pay as you use service with its related discount.',
        },
        {
          id: uid(8),
          icon: <MoneyBag />,
          title: 'Medical Courier Services',
          description:
            'Our expertise in the medical courier services allows us to offer personalized healthcare logistics solutions to hospitals, laboratories and pharmaceutical industries. We understand the extreme sensitivity and the time critical nature of the shipments they carry.',
        },
        {
          id: uid(8),
          icon: <GroupPeople />,
          title: 'Warehousing & distribution services',
          description:
            'Our warehousing and distribution services are designed to add value to your business. Here at GIG Logistics, we understand the movement of goods across suppliers, vendors, and customers.',
        },
        {
          id: uid(8),
          icon: <Wallet />,
          title: 'Mail Room Services',
          description:
            'For larger companies that often have a need for inter-office mail delivery, GIGL offers Mail Room services. Our couriers will pickup and disperse office mail on a daily or twice daily basis; following your explicit instructions.',
        },
        {
          id: uid(8),
          icon: <MoneyBag />,
          title: 'Pick Up & Delivery Services',
          description:
            'With GIG Logistics Pickup & delivery services, we take away the hassle customers undergo when sending parcels. Our experienced dispatch riders are one phone call away from scheduling your parcel collection at your desired pick up and drop off location.',
        },
      ],
    },
  },
  {
    id: uid(8),
    slug: 'domestic-courier-solutions',
    title: 'Domestic Courier Services',
    description:
      'Dedicated team who are cognizant that our corporate patrons depend on our shipping services',
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
    card_list: {
      title: 'How we work',
      cards: [
        {
          id: uid(8),
          icon: <GroupPeople />,
          title: 'Express Delivery Services',
          description:
            'With our import services, you can import directly from your international suppliers. Arrange your inbound delivery through the personalized Import Services we provide. GIGL also provides tailor-made packaging services and transport solutions for companies within the technology sector.',
        },
        {
          id: uid(8),
          icon: <Wallet />,
          title: 'Pick Up & Delivery Services',
          description:
            'On our prepaid plan, you pay for your delivery service to your customer upfront. This Services We have an extensive fleet of vehicles which enables us to provide a comprehensive range of services to a wide variety of industries. Our main areas of service are agricultural, manufacturing and industrial sectors as well as specialty project work such as transporting pipes and crane work materials. a pay as you use service with its related discount.',
        },
        {
          id: uid(8),
          icon: <MoneyBag />,
          title: 'Household moving & Office Relocation Services',
          description:
            'Our expertise in the medical courier services allows us to offer personalized healthcare logistics solutions to hospitals, laboratories and pharmaceutical industries. We understand the extreme sensitivity and the time critical nature of the shipments they carry.',
        },
        {
          id: uid(8),
          icon: <GroupPeople />,
          title: 'Mail Room Services',
          description:
            'Our warehousing and distribution services are designed to add value to your business. Here at GIG Logistics, we understand the movement of goods across suppliers, vendors, and customers.',
        },
        {
          id: uid(8),
          icon: <Wallet />,
          title: 'GIGL Business Solution',
          description:
            'For larger companies that often have a need for inter-office mail delivery, GIGL offers Mail Room services. Our couriers will pickup and disperse office mail on a daily or twice daily basis; following your explicit instructions.',
        },
        {
          id: uid(8),
          icon: <MoneyBag />,
          title: 'Sensitive & Fragile Technology Freight',
          description:
            'With GIG Logistics Pickup & delivery services, we take away the hassle customers undergo when sending parcels. Our experienced dispatch riders are one phone call away from scheduling your parcel collection at your desired pick up and drop off location.',
        },
      ],
    },
  },
  {
    id: uid(8),
    slug: 'international-courier-services',
    title: 'International Courier Services',
    description:
      'Dedicated team who are cognizant that our corporate patrons depend on our shipping services',
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
          to={{ pathname: '/contact-us' }}
        >
          Contact Us
        </Link>
      </>
    ),
    bodyNode: (
      <div className="w-full py-20">
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold mb-5">
            Overseas Shipping ( from the USA to Nigeria) - what you need to know
          </h3>
          <p>
            By using the overseas shipping feature on the GIGGo app, you can now
            shop from your favourite stores in the US and have your item(s)
            delivered to your doorstep in Nigeria without restrictions. The
            estimated time for delivery is usually between seven to ten (7 – 10)
            business days from date of departure from our delivery hub. Our
            rates from the US to all cities in Nigeria are:
          </p>
        </div>
        <div className="w-full">
          <ul className="pl-4">
            <li className={styles.listitem}>$3.49 per pound.</li>
            <li className={styles.listitem}>
              Minimum of $20 for regular items (5lbs minimum).
            </li>
            <li className={styles.listitem}>
              $3.99/lb for used laptops/phones.
            </li>
            <li className={styles.listitem}>
              Minimum of $25 for used laptops/phones(5lbs minimum).
            </li>
            <li className={styles.listitem}>$40 per new phone.</li>
            <li className={styles.listitem}>$50 per new laptop.</li>
            <li className={styles.listitem}>$25 per kids new tablet.</li>
            <li className={styles.listitem}>
              Minimum of $6/lb for Hazmat (Note: Perfume / Colognes are
              considered hazmat).
            </li>
          </ul>
        </div>
        <div className="w-3/4 text-sm">
          <p className="mb-5">
            Please note that the actual shipping price is subject to the volume
            weight of the item(s) as well as an insurance fee of 5% on the total
            value of the item(s). In a case where you want to ship multiple
            items, you can also take advantage of our consolidated shipping
            service while saving time and money. If you have further enquiries,
            we are happy to help. Please reach us on+1-281-741-1748.{' '}
          </p>
          <p>
            It takes less than 5 minutes to complete a shipping request on the
            app. You should try it!
          </p>
        </div>
      </div>
    ),
    embedded_stream:
      'https://res.cloudinary.com/gig-logistics/video/upload/v1611736809/Oversea_Ship_cd0pbd.mp4',
  },
];
