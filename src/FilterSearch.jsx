import React, { useState } from 'react';

function FilterSearch() {
    const fruitData = [
"apple",
"banana",
"cherry",
"date",
"lemon",
"mango",
"fig",
"grape",
"kiwi",
"orange",
"apple",
"banana",
"papaya",
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const searchFilter = (query) => {
        return fruitData.filter(fruit => 
            fruit.toLowerCase().includes(query.toLowerCase())
        );
    }

    const filterResult = searchFilter(searchQuery);

    return (
        <div>
            <input
                type='text'
                placeholder='Search here...'
                value={searchQuery}
                onChange={handleChange}
            />
            <ul>
                {filterResult.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default FilterSearch;
