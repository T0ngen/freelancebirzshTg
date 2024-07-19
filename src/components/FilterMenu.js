import React, { useState } from 'react';


const FilterMenu = ({ handleFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        handleFilterChange(category);
    };

    return (
        <div className="container">
            <label className="label">Фильтр по категории:</label>
            <select value={selectedCategory} onChange={handleCategoryChange} className="select">
                <option value="">Все</option>
                <option value="Дизайн">Дизайн</option>
                <option value="Разработка">Разработка</option>
                <option value="Маркетинг">Маркетинг</option>
            </select>
        </div>
    );
};

export default FilterMenu;