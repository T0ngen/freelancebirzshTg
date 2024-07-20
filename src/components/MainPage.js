import React, { useState } from 'react';
import Footer from './Footer';
import FilterMenu from './FilterMenu';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import TerminalIcon from '@mui/icons-material/Terminal';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, Typography, Box, IconButton } from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const fakeData = [
    { id: 1, text: 'Нужен дизайнер для создания аватарки', category: 'Дизайн', price: '1000', full_text: 'Ищем дизайнера для разработки дизайна упаковки контейнера с едой! Мы в поисках креативного дизайнера для разработки уникального и привлекательного дизайна макета для упаковки контейнера с едой. Работа срочная - на выполнение набросков по задаче всего несколько дней!',  },
    { id: 2, text: 'Сделать логотип', category: 'Дизайн', price: '1000' },
    { id: 3, text: 'Ивовововоа оаокококококококооккок окоококококококококок кокококооко', category: 'Дизайн', price: '1000', full_text: 'Ищем дизайнера для разработки дизайна упаковки контейнера с едой! Мы в поисках креативного дизайнера для разработки уникального и привлекательного дизайна макета для упаковки контейнера с едой. Работа срочная - на выполнение набросков по задаче всего несколько дней!' },
    { id: 4, text: 'Помощь в переносе БД с Supabase в Postgressql', category: 'Разработка', price: '1000' },
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
    { id: 17, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000' },
    { id: 18, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000' },
    { id: 19, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
    { id: 20, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
    { id: 21, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
    { id: 22, text: 'Необходимо создать сайт', category: 'Разработка', price: '1000' },
    { id: 23, text: 'Необходимо создать сайт', category: 'Разработка', price: '1000' },
    { id: 24, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
    { id: 25, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000' },
    { id: 26, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000' },
    { id: 38, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000' },
    { id: 39, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
    { id: 40, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
    { id: 41, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
    { id: 42, text: 'Необходимо создать сайт', category: 'Разработка', price: '1000' },
    { id: 43, text: 'Необходимо создать сайт', category: 'Разработка', price: '1000' },
    { id: 44, text: 'Необходимо создать сайт', category: 'Дизайн', price: '1000' },
    { id: 45, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000' },
    { id: 46, text: 'Необходимо создать сайт', category: 'Маркетинг', price: '1000' },
];

const MainPage = () => {
    const [open, setOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    const toggleDrawer = (state, task = null) => () => {
        setOpen(state);
        setCurrentTask(task);
    };

    const categoryColors = {
        'Дизайн': '#aebaba',
        'Разработка': '#bbb2cd',
        'Маркетинг': '#d4a4a9',
        // Добавьте дополнительные категории и их цвета по мере необходимости
    };

    const categoryIcons = {
        'Дизайн': <DesignServicesIcon fontSize='large' />,
        'Разработка': <TerminalIcon fontSize='large'/>,
        'Маркетинг': <StackedLineChartIcon fontSize='large'/>,
        // Добавьте дополнительные категории и их иконки по мере необходимости
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
                        style={{ backgroundColor: categoryColors[item.category], padding: '10px', borderRadius: '5px', margin: '5px' }}
                        onClick={toggleDrawer(true, item)}
                    >   
                        <div className='birzha-item-topline'>
                            {categoryIcons[item.category]}
                            <div className='birzha-item-time'>около 1 часа назад</div>
                        </div>
                        <div className='birzha-item-about'>{item.text}</div>
                        <div className='birzha-item-downline'>
                            <CreditCardIcon fontSize='medium' />Цена:
                            <div className='birzha-item-price'>договорная</div>
                        </div>
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
            
            <Drawer
                anchor='bottom'
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        height: '90%',
                        borderTopLeftRadius: '16px',
                        borderTopRightRadius: '16px',
                        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.2)',
                        backgroundColor: '#e5e6e0',
                    },
                }}
            >
                <Box sx={{ p: 2 }}>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">{currentTask ? currentTask.text : ''}</Typography>
                    
                    <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Box>
                <div className='time-task-container'>
                <AccessTimeIcon/>
                <div className='time-task-time'>Около 1 часа назад</div>
                </div>
                    {currentTask ? (
                        <>
                           
                           <div className='task-text-in-popup-container'>
                            <Typography className='task-text-in-popup' variant="body2">{currentTask.full_text || 'Нет дополнительной информации'}</Typography>
                            </div>
                            <div className='task-text-button'>
                                <div className='task-text-button-text'>Откликнуться</div>
                                <DoneOutlineIcon/>
                            </div>
                        </>
                    ) : (
                        <Typography variant="body2">Задача не выбрана</Typography>
                    )}
                </Box>
            </Drawer>
        </div>
    );
};

export default MainPage;
