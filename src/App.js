import React, { useEffect, useState } from 'react';
import SelectDropdown from './components/SelectDropdown';
import ReviewListContainer from './components/ReviewListContainer';
import './App.css';
import dummyData from './review.json';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortingOption, setSortingOption] = useState('newest');

  useEffect(() => {
    // Simulating fetching data from a JSON file
    setData(dummyData);
    setFilteredData(dummyData);
  }, []);

  const handleAppIDChange = (appID) => {
    if (appID === '') {
      setFilteredData(data);
    } else {
      const filteredReviews = data.filter((review) => review.appID === appID);
      setFilteredData(filteredReviews);
    }
  };

  const handleSortingChange = (e) => {
    setSortingOption(e.target.value);
    sortFilteredData(e.target.value);
  };

  const sortFilteredData = (option) => {
    const sortedReviews = [...filteredData];
    if (option === 'newest') {
      sortedReviews.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate));
    } else if (option === 'oldest') {
      sortedReviews.sort((a, b) => new Date(a.reviewDate) - new Date(b.reviewDate));
    }
    setFilteredData(sortedReviews);
  };

  return (
    <div className="App container m-auto font-sans pt-4">
      <div className="flex flex-col w-full">

        <div className="flex">
          <SelectDropdown data={data} onAppIDChange={handleAppIDChange} />
          <div className="sorting w-1/5 pb-4 border-b-2  px-3">
            <label className="text-md font-normal text-gray-700 ">Sorting </label>
            <select
              name="sorting"
              className="w-full bg-gray-50 border border-gray-100 text-gray-700 text-md rounded-sm block p-2 custom-select"
              value={sortingOption}
              onChange={handleSortingChange}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
          <div className="translate w-1/5 pb-4 border-b-2 px-3">
            <label className="text-md font-normal text-gray-700 ">Translate </label>
            <select name="languages" className=" w-full bg-gray-50 border border-gray-100 text-gray-700 text-md rounded-sm  block  p-2  ">
              <option>English</option>
              <option>French</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>


        <div className="flex ">
          <div className="w-1/5 pt-4">filtering part</div>
          <ReviewListContainer data={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default App;
