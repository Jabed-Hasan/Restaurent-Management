import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';

const AllFoodItems = () => {
  const foods = useLoaderData();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  // Initialize searchResults with all foods when the component mounts
  useEffect(() => {
    setSearchResults(foods);
  }, [foods]);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = searchText.toLowerCase();
    const filteredData = foods.filter((food) =>
      food.foodName.toLowerCase().includes(inputValue)
    );

    setSearchResults(filteredData);
    setNoResults(filteredData.length === 0);
  };

  return (
    <div className="">
      <div className='relative h-[70vh] bg-[url("https://i.ibb.co/CMQ33yX/1-1.jpg")] opacity-80'></div>
      <div>
        <h1 className='text-white absolute font-semibold left-[6%] bottom-[2%] md:left-[30%] md:bottom-[20%] lg:top-[40%] lg:left-[26%] text-center text-lg lg:text-5xl md:text-2xl items-center border-solid'>
          Search Your Favorite Foods
        </h1>
        <div className='absolute lg:text-2xl left-[2%] top-[100%] md:left-[30%] md:top-[90%] lg:top-[60%] lg:left-[33%]'>
          <form className='item-center ml-10' onSubmit={handleSearch}>
            <input
              className='p-2 rounded-lg'
              type='text'
              placeholder='Search by food name...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <input
              className='bg-red-500 text-white p-2 rounded-lg cursor-pointer hover-bg-orange-500'
              type='submit'
              value='Search'
            />
          </form>
        </div>
      </div>

      {searchResults.length > 0 ? (
        <div className='grid md:grid-cols-2 gap-10 py-10'>
          {searchResults.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      ) : noResults ? (
        <p>No results found.</p>
      ) : null}
    </div>
  );
};

export default AllFoodItems;
