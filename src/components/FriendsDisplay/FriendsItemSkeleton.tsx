import React from 'react';

interface Props {
  index: number;
}

const FriendsItemSkeleton: React.FC<Props> = ({ index }) => (
  <div
    className={`w-full sm:w-1/2 p-0 sm:p-4 mb-8 h-auto lg:h-72 ${
      index % 2 ? 'sm:pr-0' : 'sm:pl-0'
    } `}
  >
    <div className="bg-white h-full w-full rounded-2xl">
      <div className="h-24 shimmer shimmer bg-cover w-full rounded-t-2xl" />
      <div className="p-4 flex flex-wrap sm:flex-nowrap items-start">
        <div className="w-20 -mt-10 h-20 flex items-start flex-shrink-0">
          <div className="rounded-full border-4 shimmer shimmer border-white w-full h-full" />
        </div>
        <div className="flex-grow ml-5">
          <div className="flex flex-wrap items-center">
            <div className="flex-grow">
              <span className="font-semibold w-full h-4 block shimmer font-heading text-lg leading-7" />
              <span className="text-sm w-full h-4 block shimmer" />
            </div>
          </div>
          <div className="shimmer w-full h-12 block" />
        </div>
      </div>
    </div>
  </div>
);

export default FriendsItemSkeleton;
