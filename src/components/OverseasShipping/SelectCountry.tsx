import React from 'react';
import { useHistory } from 'react-router';
import Select from '../form-controls/Select';
import { countryContent } from './country-content';

interface Props {}

export const SelectCountry: React.FC<Props> = (props) => {
  const [selectedCountry, setSelectedCountry] = React.useState<'UK' | 'USA'>(
    'USA'
  );

  const history = useHistory();

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="container flex flex-wrap mx-auto">
          <div className="sm:w-1/2 py-24 w-full">
            <h4 className="font-bold mb-7 text-3xl">
              Ship anything, anywhere, anytime…
            </h4>
            <div className="mb-7">
              <p className="mb-5">
                Shipping items across countries, whether purchased or produced,
                can be a hassle, with long delivery timelines and shipping
                restrictions. GIG Logistics (GIGL) is however bridging that gap
                by providing fast, seamless, and efficient overseas shipping
                service from around the world to Nigeria and vice versa, be it
                to or from China, USA, UK, Dubai, Australia, etcetera.
              </p>
              <p className="mb-5">
                Through a robust network, fast-growing global footprint as well
                as the innovative use of technology, GIGL has made it incredibly
                easy to ship or receive items through the GIGGo app from any
                city in the world.
              </p>
            </div>
          </div>
          <div className="sm:w-1/2  flex-col items-center justify-center w-full hidden sm:flex">
            <img
              alt=""
              src="https://giglogistics.com/static/media/oversea.ee532203.jpeg"
              className="w-auto h-96"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="container mx-auto py-10">
          <h4 className="text-center mb-12 font-bold text-2xl">
            Overseas Shipping ( from the {selectedCountry} to Nigeria) - what
            you need to know
          </h4>
          <div className="w-full">
            <Select
              id="country"
              name="country"
              value={selectedCountry}
              placeholder="Select a country"
              wrapperClassName="w-full sm:w-1/5"
              customChange={(value: 'UK' | 'USA') => setSelectedCountry(value)}
              options={[
                { value: 'USA', label: 'USA' },
                { value: 'UK', label: 'UK' },
              ]}
            />
          </div>
          <div className="w-full">{countryContent[selectedCountry] || ''}</div>
          <div className="w-full flex justify-center">
            <button
              type="button"
              onClick={() => history.push('overseas-shipping/ship')}
              className="bg-secondary border text-white rounded py-2 max-w-xs w-full font-semibold text-lg"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
