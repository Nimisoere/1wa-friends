import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import styles from './ServicePortfolio.module.scss';
import rider from '../../assets/images/giggo-rider.png';
import { services } from './service-nav-data';
import { PropsFromRedux } from '.';

interface Props extends PropsFromRedux {}

const ServicePortfolio: React.FC<Props> = (props) => (
  <div className="container flex flex-wrap mx-auto py-20">
    <div className="w-full sm:w-2/5 lg:w-3/5">
      <div>
        <h1 className={styles.pageheader}>Services Portfolio</h1>
      </div>
      <div className="w-full">
        <img src={rider} className="w-full" alt="giggo-rider" />
      </div>
    </div>
    <div className="w-full sm:w-3/5 lg:w-2/5 px-2">
      <div className="w-full grid sm:grid-flow-col gap-8 grid-rows-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-secondary text-white rounded-3xl p-5 shadow-2xl"
          >
            {service.icon}
            <h4 className="font-bold mb-5">{service.title}</h4>
            <p className="text-xs font-medium mb-4">{service.description}</p>
            <p className="text-xs font-medium">
              <Link to={service.link}>
                Read More <HiOutlineArrowNarrowRight className="inline-flex" />
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ServicePortfolio;
