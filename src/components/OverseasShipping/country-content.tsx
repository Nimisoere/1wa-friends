import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

export const countryContent = {
  USA: (
    <div className="w-full py-10">
      <div className="w-full mb-12">
        <p>
          By using the overseas shipping feature on the GIGGo app, you can now
          shop from your favourite stores in the US and have your item(s)
          delivered to your doorstep in Nigeria without restrictions. The
          estimated time for delivery is usually between seven to fourteen (7 –
          14) business days from date of departure from our delivery hub. Our
          rates from the US to all cities in Nigeria are:
        </p>
      </div>
      <div className="w-full mb-12">
        <ul className="pl-4">
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">$3.49 per pound.</span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">
              Minimum of $20 for regular items (5lbs minimum).
            </span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">$3.99/lb for used laptops/phones.</span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">
              Minimum of $25 for used laptops/phones(5lbs minimum).
            </span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">$40 per new phone.</span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">$50 per new laptop.</span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">$25 per kids new tablet.</span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">
              Minimum of $6/lb for Hazmat (Note: Perfume / Colognes are
              considered hazmat).
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full mb-12">
        <p className="mb-5">
          Please note that the actual shipping price is subject to the volume
          weight of the item(s) as well as an insurance fee of 5% on the total
          value of the item(s). In a case where you want to ship multiple items,
          you can also take advantage of our consolidated shipping service while
          saving time and money. If you have further enquiries, we are happy to
          help. Please reach us on{' '}
          <a className="text-blue-700" href="mailto:houston@giglogistics.com">
            houston@giglogistics.com
          </a>
          . It takes less than 5 minutes to complete a shipping request on the
          app. You should try it!
        </p>
        <p>
          It takes less than 5 minutes to complete a shipping request on the
          app. You should try it!
        </p>
      </div>
    </div>
  ),
  UK: (
    <div className="w-full py-10">
      <div className="w-full mb-12">
        <p>
          By using the overseas shipping feature on the GIGGo app, you can now
          shop from your favourite stores in the US and have your item(s)
          delivered to your doorstep in Nigeria without restrictions. The
          estimated time for delivery is usually between three to four (3 – 4)
          business days from date of departure from our delivery hub. Our rates
          from the UK to all cities in Nigeria are:
        </p>
      </div>
      <div className="w-full mb-12">
        <ul className="pl-4">
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">£4.50 per kg</span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow"> Minimum of £27 for regular items</span>
            (6kg minimum).
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">
              {' '}
              £5 per kg for used laptops/phones. Minimum of £30 for regular
              items (6kg minimum)
            </span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow"> £30 per new smartphone</span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">£50 per new laptop</span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">£30 per kids’ new tablet</span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkCircle className="mr-3" />
            <span className="flex-grow">
              £5 per kg for Perfume / Colognes and £30 for (6 kg minimum)
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full mb-12">
        <p className="mb-5">
          Please note that the actual shipping price is subject to the volume
          weight of the item(s) as well as an insurance fee of 5% on the total
          value of the item(s). In a case where you want to ship multiple items,
          you can also take advantage of our consolidated shipping service while
          saving time and money. If you have further enquiries, we are happy to
          help. Please reach us on{' '}
          <a className="text-blue-700" href="mailto:gigluk@giglogistics.com">
            gigluk@giglogistics.com
          </a>
          . It takes less than 5 minutes to complete a shipping request on the
          app. You should try it!
        </p>
        <p>
          It takes less than 5 minutes to complete a shipping request on the
          app. You should try it!
        </p>
      </div>
    </div>
  ),
};
