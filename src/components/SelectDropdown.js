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
    <div className='w-3/5  pb-4 border-b-2 divide-slate-900 '>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Products</label><br />
      <select name="Products" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-3 " value={selectedAppID} onChange={handleAppIDChange}>
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
