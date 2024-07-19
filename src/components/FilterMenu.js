import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';


const FilterMenu = ({ handleFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        handleFilterChange(category);
    };

    return (
        <div className="container">
            <FormControl sx={{ m: 3,  minWidth: 220 }}>
                <InputLabel id="category-select-label">Фильтр по категориям</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    value={selectedCategory}
                    label="Фильтр по категории"
                    sx={{ borderRadius: '15px'  }}
                    onChange={handleCategoryChange}
                >
                    <MenuItem value="">
                        <em>Все</em>
                    </MenuItem>
                    <MenuItem value="Дизайн">Дизайн</MenuItem>
                    <MenuItem value="Разработка">Разработка</MenuItem>
                    <MenuItem value="Маркетинг">Маркетинг</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default FilterMenu;