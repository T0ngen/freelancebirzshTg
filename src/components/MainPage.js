import React, { useState } from 'react';
import Footer from './Footer';
import FilterMenu from './FilterMenu';

const MainPage = () => {
    const fakeData = [
        {id: 1, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000'},
        {id: 2, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000'},
        {id: 3, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000'},
        {id: 4, text: 'Необходимо создать сайт', category: 'Разработка', price: '1000'},
        {id: 5, text: 'Необходимо создать сайт', category: 'Разработка', price: '1000'},
        {id: 6, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000'},
        {id: 7, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000'},
        {id: 8, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000'},
    ];

    const [filteredData, setFilteredData] = useState(fakeData);

    const handleFilterChange = (category) => {
        if (category === '') {
            setFilteredData(fakeData);
        } else {
            setFilteredData(fakeData.filter(item => item.category === category));
        }
    };

    return (
        <>
            <h1>Главная страница</h1>
            <FilterMenu handleFilterChange={handleFilterChange} />
            <ul>
                {filteredData.map(item => (
                    <li key={item.id}>{item.text} - {item.category} - {item.price}</li>
                ))}
            </ul>
            <Footer active={'active'} />
        </>
    );
};

export default MainPage;