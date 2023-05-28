import React from 'react';

const Review = ({ reviewData }) => {
  const { appStoreName, reviewDate, rating, version, countryName, reviewHeading, reviewText, reviewUserName } = reviewData;

  return (
    <div className="bg-gray-100 p-6 m-3 w-full" >
      <div className='inline-flex gap-4 '>
        <span className="bg-gray-200 px-4 mb-2 text-center font-medium ">{appStoreName}</span>
        <p className="mb-1"><strong>{reviewHeading}</strong></p>
        <div className="mb-1 flex flex-inline">
          {Array.from({ length: rating }).map((_, index) => (
            <svg
              key={index}
              aria-hidden="true"
              className="w-7 h-7 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}

        </div>
      </div>
      <p className="mb-1 font-normal py-8 ">{reviewText}</p>
      <div className='flex flex-inline gap-8 font-medium'>
        <p className="mb-1">By {reviewUserName}</p>
        <p className="mb-1">In {reviewDate}</p>
        <p className="mb-1"> {version}</p>
        <p className="mb-1"> {countryName}</p>
      </div>

    </div>
  );
};

export default Review;
