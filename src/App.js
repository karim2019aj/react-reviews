import React, { useEffect, useState } from 'react';
import SelectDropdown from './components/SelectDropdown';
import ReviewListContainer from './components/ReviewListContainer';
import './App.css';
import dummyData from './review.json';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Simulating fetching data from a JSON file
    setData(dummyData);
    setFilteredData(dummyData);
  }, []);

  const handleAppIDChange = (appID) => {
    if (appID === '') {
      setFilteredData(data);
    } else {
      const filteredReviews = data.filter(review => review.appID === appID);
      setFilteredData(filteredReviews);
    }
  };

  return (
    <div className="App container m-auto font-sans">
      <div className="flex flex-col w-full gap-4">

        <div className="flex">
          <SelectDropdown  data={data} onAppIDChange={handleAppIDChange} />
          <div className="w-2/5 pb-4 border-b-2 divide-slate-900 ">Sorting part</div>
        </div>


        <div className="flex ">
          <div className="w-1/5">filtering part</div>
          <ReviewListContainer  data={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default App;
