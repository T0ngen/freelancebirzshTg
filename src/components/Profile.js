// MainPage.js
import { pink } from '@mui/material/colors';
import React from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const Profile = ( ) => {
  
  return <>
        <div className='profile-top-double-btns'>
     <div className='change-role-text-profile'>
     <CachedIcon fontSize="large" />
     Переключиться на заказчика</div>

     </div>
     <div className='profile'>
            <div className='profile-userinfo2 row-info-profile'>
                <div className='user-category-name'>Фрилансер</div>
                <h4 className='username'>{"scdb22"}</h4>
                <p className='telegram-id'><b>ID:</b> {3131}</p>
            </div>
            <div className='profile-userinfo2 row-balance'>
                <BatteryChargingFullIcon sx={{ color: pink[500] }} fontSize="large"/>
                <div>
                <div className='balance-container'>
                <h4 className='balance-text'>Энергия</h4>
                <p className='balance-count'>{0} шт</p>
                </div>
                </div>
            </div>
            
            </div>
  </>;
};

export default Profile;