import React from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HailIcon from '@mui/icons-material/Hail';
import { useNavigate } from 'react-router-dom';
import MainPage from './MainPage';

const ChooseRole = ({ status }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/mainpage`);
    };

  if (status === 1) {
    return <MainPage/>;
  } else if (status === 0) {
    return (
      <div>
       <div className='text-start-buttons'>Войти как...</div>
       <div className='row change-role-buttons'>
       
        <div className='col-6'>
        <div className='start-choose-button' onClick={handleClick}>

        <div >Я фрилансер</div>
        <EngineeringIcon fontSize='large'/>
        </div>
        </div>
        <div className='col-6'>
        <div className='start-choose-button' onClick={handleClick}>
        <div>Я заказчик</div>
        <HailIcon fontSize='large'/>
        </div>
        </div>
       </div>
       <div className='text-start-buttons-rules'>Вы сможете сменить тип аккаунта в своем профиле</div>
      </div>
    );
  }

  // Можно возвращать какой-то дефолтный контент, если статус имеет другое значение
  return <h1>Invalid Status</h1>;
};

export default ChooseRole;
