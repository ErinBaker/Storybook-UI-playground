
import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <div class="relative mt-1">
            <input type="search" className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-md hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Search members..."/>
            <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
            </button>
        </div>
  )
}

export default Search
