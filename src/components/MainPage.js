import React, { useState } from 'react';
import Footer from './Footer';
import FilterMenu from './FilterMenu';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MainPage = () => {
    const fakeData = [
        { id: 1, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
        { id: 2, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
        { id: 3, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
        { id: 4, text: 'Необходимо создать сайт', category: 'Разработка', price: '1000' },
        { id: 5, text: 'Необходимо создать сайт', category: 'Разработка', price: '1000' },
        { id: 6, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
        { id: 7, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000' },
        { id: 8, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000' },
        { id: 9, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
        { id: 10, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
        { id: 11, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
        { id: 12, text: 'Необходимо создать сайт', category: 'Разработка', price: '1000' },
        { id: 13, text: 'Необходимо создать сайт', category: 'Разработка', price: '1000' },
        { id: 14, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
        { id: 15, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000' },
        { id: 16, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000' },
    ];

    const categoryColors = {
        'Дизайн': '#aebaba',
        'Разработка': '#bbb2cd',
        'Маркетинг': '#d4a4a9',
        // Добавьте дополнительные категории и их цвета по мере необходимости
    };

    const [filteredData, setFilteredData] = useState(fakeData);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handleFilterChange = (category) => {
        setCurrentPage(1); // Сбросить текущую страницу при изменении фильтра
        if (category === '') {
            setFilteredData(fakeData);
        } else {
            setFilteredData(fakeData.filter(item => item.category === category));
        }
    };

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0); // Прокручиваем страницу наверх
    };

    // Вычисляем текущие элементы на странице
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Вычисляем количество страниц
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className="main-page">
            <FilterMenu handleFilterChange={handleFilterChange} />
            <div className='container-birzha-items'>
                {currentItems.map(item => (
                    <div
                        className='birzha-item'
                        key={item.id}
                        style={{ backgroundColor: categoryColors[item.category] }}
                    >
                        {item.text} - {item.category} - {item.price}
                    </div>
                ))}
            </div>
            <Stack className='pagination' spacing={2} alignItems="center">
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    color="primary"
                />
                            </Stack>
            <Footer active={'active'} />
        </div>
    );
};

export default MainPage;