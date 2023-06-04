import React, { useState } from 'react';


const KeywordSearching = ({ data, filtredData, onFilter }) => {
    const [keyword, setKeyword] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        setKeyword(value);
        if (value.length == 0) {
          // Handle the case when the value is empty
          onFilter(data);
        } else {
          filterData(value);
        }
      };
      

    const filterData = (value) => {
        const filteredReviews = filtredData.filter((review) => {
            const { reviewHeading, reviewText } = review;
            return (
                reviewHeading.toLowerCase().includes(value.toLowerCase()) ||
                reviewText.toLowerCase().includes(value.toLowerCase())
            );
        });
        onFilter(filteredReviews);
       
    };
    return (
        <form className='p-2'>
            <input type='search' 
            className='bg-gray-200 p-2 rounded-md' 
            onChange={handleInputChange}
            value={keyword}
            placeholder='Search' 
            name='KeywordSearch' 
            />   
        </form>


    );

}


export default KeywordSearching;

