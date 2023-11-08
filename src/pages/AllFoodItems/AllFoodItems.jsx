import React, { useState, useEffect } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import Footer from '../footer/Footer';

const AllFoodItems = () => {
  const [foods, setFoods] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page

  useEffect(() => {
    // Fetch your data from the backend using pagination
    fetch(`http://localhost:4000/FoodItems?page=${currentPage}&size=${itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        setFoods(data);
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [currentPage]);

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
      <div className="relative h-[70vh] bg-[url('https://i.ibb.co/CMQ33yX/1-1.jpg')] opacity-80"></div>
      <div>
        <h1 className="text-white absolute font-semibold left-[6%] bottom-[2%] md:left-[30%] md:bottom-[20%] lg:top-[40%] lg:left-[26%] text-center text-lg lg:text-5xl md:text-2xl items-center border-solid">
          Search Your Favorite Foods
        </h1>
        <div className="absolute lg:text-2xl left-[2%] top-[100%] md:left-[30%] md:top-[90%] lg:top-[60%] lg:left-[33%]">
          <form className="item-center ml-10" onSubmit={handleSearch}>
            <input
              className="p-2 rounded-lg"
              type="text"
              placeholder="Search by food name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <input
              className="bg-red-500 text-white p-2 rounded-lg cursor-pointer hover-bg-orange-500"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>

      <h1 className="text-4xl text-center font-bold py-10">Our Menus</h1>

      {searchResults.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-10 py-10 px-10 products-container">
          {searchResults.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      ) : noResults ? (
        <p className="text-2xl font-bold text-center p-20">No results found.</p>
      ) : null}

      {/* Pagination */}
      <div className="pagination text-center flex items-center justify-center">
        <button className='btn'
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className='bg-orange-500 text-white font-bold p-3 rounded-lg mx-5'>Page {currentPage}</span>
        <button className='btn'
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={searchResults.length < itemsPerPage}
        >
          Next
        </button>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default AllFoodItems;
