import React from 'react';
const Review = ({ reviewData }) => {
  const { appStoreName, reviewDate, rating, version, countryName, reviewHeading, reviewText, reviewUserName } = reviewData;

  return (
    <div className="border border-gray-200 shadow-lg rounded  p-6 m-3 w-full" >
      <div className='inline-flex gap-4 items-center '>
        <span className="bg-gray-200 px-4 rounded text-center font-medium text-slate-800">{appStoreName}</span>
        <p className="font-semibold">{reviewHeading}</p>
        <div className=" flex flex-inline">
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
      <p className="font-normal py-8 text-slate-700 ">{reviewText}</p>
      <div className="flex items-center justify-between gap-4 font-medium text-slate-800">
        <div className='flex flex-inline gap-4'>
          <p>By {reviewUserName}</p>
          <p>In {reviewDate}</p>
          <p>{version}</p>
          <p>{countryName}</p>
        </div>
        <div className="flex gap-4">
          <a href='#'>reply</a>
          <a href='#' className='flex flex-inline' >
            <p>share</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>


        </div>
      </div>



    </div>
  );
};

export default Review;
