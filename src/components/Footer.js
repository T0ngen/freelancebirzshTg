import React from 'react';

import PersonIcon from '@mui/icons-material/Person';
import {useNavigate } from 'react-router-dom';
import ComputerIcon from '@mui/icons-material/Computer';
export default function Footer({active}){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/profile');
    };
    const handleClickHome = () => {
        navigate('/mainpage');
    };
    return(
        <>
            
            <div className="footer-block">
               
                <div className='row'>
                    <div   className='col-6 col-footer'>
                        <div onClick={handleClickHome}  className='footer-button'>
                            <ComputerIcon className={('footer-icon', { 'active': active === 'active' })}  fontSize="large"/>
                            <p className={active === 'active' ? 'footer-text-active' : 'footer-text'}>Биржа</p>
                        </div>
                    </div>
                    <div onClick={handleClick} className='col-6 col-footer'>
                    <div  className='footer-button'>
                        <PersonIcon className={('footer-icon', { 'active': active === 'active2' })} fontSize="large"/>
                        <p className={active === 'active2' ? 'footer-text-active' : 'footer-text'}>Профиль</p>
                    </div>
                    </div>
                </div>

            </div>
           
        </>
    )
}
