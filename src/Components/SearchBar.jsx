import React from 'react'

const SearchBar = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="flex items-center justify-center mt-7 gap-3">
            <input
                type="search"
                className="input placeholder:text-gray-400 border border-gray-300 outline-none focus:outline-none
                            shadow-blue-400 hover:shadow-md transition-all duration-300 w-64 p-2 rounded text-center"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}
export default SearchBar
