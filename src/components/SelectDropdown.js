import React, { useState } from 'react';
const SelectDropdown = ({ data, onAppIDChange }) => {
  const [selectedAppID, setSelectedAppID] = useState('');

  const handleAppIDChange = (event) => {
    const appID = event.target.value;
    setSelectedAppID(appID);
    onAppIDChange(appID);
  };

  const uniqueAppIDs = Array.from(new Set(data.map(review => review.appID)));

  return (
    <div className='w-3/5  pb-4 border-b-2 divide-gray-500'>
      <label className="text-md font-normal text-gray-700 ">Select Products</label>
      <select name="Products" className=" bg-gray-50 border border-gray-50 text-gray-700 text-md rounded-sm  block w-2/4 p-2 pr-7 " value={selectedAppID} onChange={handleAppIDChange}>
        <option value="">All Products</option>
        {uniqueAppIDs.map(appID => (
          <option className="option" key={appID} value={appID}>
            {appID}
          </option>
        ))}

      </select>

    </div>

  );
};

export default SelectDropdown;
